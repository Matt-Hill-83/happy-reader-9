import { decorate, observable, toJS } from "mobx"
import Utils from "../../Utils/Utils"
import _get from "lodash.get"

class LocalStateStore {
  activeFrameIndex = 0
  activeMapId = null
  activeSceneId = null
  completedMissions = []
  defaultWorldId = null
  mapBuilderGrid = []
  showBookPicker = false
  showWorldBuilder = false
  unlockedSubQuests = [0]
  hiddenScenes = [0]
  lockedScenes = []
  visitedScenes = []

  _defaultQuestStatus = {
    activeSubQuestIndex: 0,
    activeMissionIndex: 0,
    pockets: { gold: { amount: 0 } },
    desiredItems: [],
    questConfig: {
      missions: [],
    },
  }

  questStatus = { ...this._defaultQuestStatus }

  getQuestNames = () => this.questStatus.quests.map((item) => item.name)

  getQuestStatus = () => this.questStatus
  setQuestStatus = (questStatus) => {
    this.questStatus = questStatus
  }

  getDefaultQuestStatus = () => this._defaultQuestStatus

  getDefaultWorldId = () => this.defaultWorldId
  setDefaultWorldId = (defaultWorldId) => {
    this.defaultWorldId = defaultWorldId
  }

  getHiddenScenes = () => this.hiddenScenes
  setHiddenScenes = (hiddenScenes) => {
    this.hiddenScenes = hiddenScenes
  }

  getLockedScenes = () => this.lockedScenes
  setLockedScenes = (lockedScenes) => {
    this.lockedScenes = lockedScenes
  }

  getUnlockedSubQuests = () => this.unlockedSubQuests
  setUnlockedSubQuests = (unlockedSubQuests) => {
    this.unlockedSubQuests = unlockedSubQuests
  }

  getCompletedMissions = () => this.completedMissions
  setCompletedMissions = (completedMissions) => {
    this.completedMissions = completedMissions
  }

  clearUnlockedSubQuests = () => {
    this.unlockedSubQuests.length = 0
  }

  unlockSubQuestForActiveScene = () => {
    const scene = this.getActiveScene()
    const subQuestId = _get(scene, "sceneConfig.subQuestId")
    this.unLockSubQuestById({ subQuestId })
  }

  unLockSubQuestById = ({ subQuestId }) => {
    if (
      typeof subQuestId === "number" &&
      !this.unlockedSubQuests.includes(subQuestId)
    ) {
      this.unlockedSubQuests.push(subQuestId)
    }
  }

  ///////////////
  ///////////////
  ///////////////
  getVisitedScenes = () => this.visitedScenes
  setVisitedScenes = (visitedScenes) => {
    this.visitedScenes = visitedScenes
  }

  clearVisitedScenes = () => {
    this.visitedScenes.length = 0
  }

  addVisitedScenes = (sceneId) => {
    this.visitedScenes.push(sceneId)
  }

  isVisitedScene = (sceneId) => {
    return this.visitedScenes.some((scene) => scene === sceneId)
  }

  convertItemToObjFormat = ({ itemsArray = [] }) => {
    const newObj = {}
    itemsArray.forEach((item) => {
      const itemName = item.name
      const value = newObj[itemName]
      if (value) {
        value.ammount += item.amount
      } else {
        newObj[itemName] = { amount: item.amount }
      }
    })

    return newObj
  }

  setQuestStatusToDefault = () => {
    this.questStatus = { ...this._defaultQuestStatus }
  }

  getDesiredItem = () => {
    const activeMissionIndex = this.getActiveMission()
    if (!activeMissionIndex) {
      return null
    }
    return activeMissionIndex.item
  }

  getDesiredItems = () => {
    return this.questStatus.desiredItems
  }

  removeItemFromDesiredItems = ({ itemToRemove }) => {
    if (!itemToRemove) {
      return
    }

    const modifiedArray = this.questStatus.desiredItems.filter((item) => {
      return item.name !== itemToRemove.name
    })

    this.questStatus.desiredItems.length = 0
    this.questStatus.desiredItems.push(...modifiedArray)
  }

  getActiveMission = () => {
    // const { missions } = this.questStatus.questConfig
    const missions = Utils.getActiveSubQuestMissions()
    return missions[this.questStatus.activeMissionIndex] || null
  }

  getDesiredRecipient = () => {
    const activeMissionIndex = this.getActiveMission()
    if (!activeMissionIndex) {
      return null
    }
    return activeMissionIndex.recipient
  }

  addToPockets = ({ newPockets }) => {
    const existingPockets = this.getQuestStatus().pockets || {}
    for (const newPocketName in newPockets) {
      const newPocket = newPockets[newPocketName]
      const existingItemWithSameName = existingPockets[newPocketName]

      if (existingItemWithSameName) {
        existingItemWithSameName.amount =
          existingItemWithSameName.amount + newPocket.amount
      } else {
        existingPockets[newPocketName] = {
          amount: newPocket.amount,
        }
      }
    }
    return existingPockets
  }

  updateQuestState = ({ itemsInScene, charactersInScene }) => {
    console.log("updateQuestState") // zzz
    const questStatus = this.questStatus

    if (!questStatus.questConfig) {
      return {}
    }
    const missions = Utils.getActiveSubQuestMissions()
    // const { missions } = questStatus.questConfig
    const { pockets } = questStatus

    if (!missions) {
      return {}
    }
    const activeMissionId = questStatus.activeMissionIndex
    const activeMissionIndex = missions[activeMissionId] || null
    if (!activeMissionIndex) {
      return {}
    }

    const isMissionCompleted = this._completeMission({
      charactersInScene,
      questStatus,
    })

    if (isMissionCompleted) {
      this.completedMissions.push(activeMissionId)

      // remove item from pocket
      const desiredItem = this.getDesiredItem()

      delete pockets[desiredItem.name]

      activeMissionIndex.completed = true
      questStatus.activeMissionIndex++

      const newPockets = this.convertItemToObjFormat({
        itemsArray: activeMissionIndex.rewards,
      })

      this.addToPockets({ newPockets })
      this.setQuestStatus(questStatus)
    }

    const foundItem = this._findItem({ itemsInScene })
    this.removeItemFromDesiredItems({ itemToRemove: foundItem })

    return {
      foundItem,
      completedMission: isMissionCompleted ? activeMissionIndex : false,
    }
  }

  _isDesiredItemInPocket = ({ desiredItem, pockets }) => {
    const itemsInPockets = Object.keys(pockets)
    return itemsInPockets.includes(desiredItem.name)
  }

  _isDesiredRecipientHere = ({ desiredRecipient, charactersInScene }) => {
    const characterNames = charactersInScene.map((item) => item.name)

    return characterNames.includes(desiredRecipient.name)
  }

  _completeMission = ({ charactersInScene }) => {
    const desiredItem = this.getDesiredItem()

    const desiredRecipient = this.getDesiredRecipient({})

    const { pockets = {} } = this.questStatus

    const isDesiredItemInPocket = this._isDesiredItemInPocket({
      desiredItem,
      pockets,
    })

    const isDesiredRecipientHere = this._isDesiredRecipientHere({
      desiredRecipient,
      charactersInScene,
    })

    return isDesiredRecipientHere && isDesiredItemInPocket
  }

  _findItem = ({ itemsInScene }) => {
    const desiredItems = this.getDesiredItems() || []
    const questStatus = this.questStatus

    const { pockets = {} } = questStatus

    const foundItems = []
    desiredItems.forEach((desiredItem) => {
      const foundItem =
        itemsInScene.find((item) => {
          return item.name === (desiredItem && desiredItem.name)
        }) || null
      if (foundItem) {
        foundItems.push(foundItem)
      }
    })
    const foundItem = foundItems[0]
    if (!foundItem) {
      return null
    }

    if (!foundItem.amount) {
      foundItem.amount = 1
    }

    const itemsInPockets = pockets[foundItem.name]

    if (itemsInPockets) {
      itemsInPockets.amount = itemsInPockets.amount + foundItem.amount
    } else {
      pockets[foundItem.name] = { amount: foundItem.amount }
    }

    this.setQuestStatus(questStatus)
    return foundItem
  }

  getQuestItems = () => {
    const questItems = []
    this.questStatus.questConfig.missions.forEach((mission) => {
      questItems.push(...mission.items)
    })
    return questItems
  }

  getQuestRewards = () => {
    const questItems = []
    this.questStatus.questConfig.missions.forEach((mission) => {
      questItems.push(...mission.rewards)
    })
    return questItems
  }

  getWorldBuilderScenesGrid = () => this.mapBuilderGrid
  setWorldBuilderScenesGrid = (mapBuilderGrid) => {
    this.mapBuilderGrid = mapBuilderGrid
  }

  getWorldBuilderWorld = () => this.mapBuilderWorld
  setWorldBuilderWorld = (mapBuilderWorld) => {
    this.mapBuilderWorld = mapBuilderWorld
  }

  getShowWorldBuilder = () => this.showWorldBuilder
  setShowWorldBuilder = (showWorldBuilder) => {
    this.showWorldBuilder = showWorldBuilder
  }

  getShowBookPicker = () => this.showBookPicker
  setShowBookPicker = (showBookPicker) => {
    this.showBookPicker = showBookPicker
  }

  getActiveWorld = () => {
    const world = Utils.getMapFromId({ id: this.activeMapId })
    return world
  }

  getActiveWorldGrid = () => {
    const map = Utils.getMapFromId({ id: this.activeMapId })
    return map.data.newGrid5 || []
  }

  getActiveWorldId = () => this.activeMapId
  setActiveMapId = (activeMapId) => {
    this.activeMapId = activeMapId
  }

  getIsProdRelease = () => this.isProdRelease
  setIsProdRelease = (isProdRelease) => {
    this.isProdRelease = isProdRelease
  }

  getActiveFrameIndex = () => this.activeFrameIndex
  setActiveFrameIndex = (activeFrameIndex) => {
    this.activeFrameIndex = activeFrameIndex
  }

  getFirstFrame = () => {
    const activeScene = localStateStore.getActiveScene()
    const { frameSet } = activeScene
    const firstFrame = _get(frameSet, "frames[0]")
    return firstFrame
  }

  incrementActiveFrameIndex = (reset) => {
    let newIndex

    if (reset) {
      newIndex = 0
    } else {
      newIndex = this.getActiveFrameIndex() + 1
    }

    this.setActiveFrameIndex(newIndex)
  }

  getActiveSceneId = () => this.activeSceneId
  setActiveSceneId = (activeSceneId) => {
    this.activeSceneId = activeSceneId
  }

  getActiveScene = () => {
    const activeSceneId = this.getActiveSceneId()
    const scenesGrid = this.getActiveWorldGrid()

    const activeScene = scenesGrid.find((item) => item.id === activeSceneId)
    return activeScene
  }
}

decorate(LocalStateStore, {
  activeFrameIndex: observable,
  activeMapId: observable,
  activeSceneId: observable,
  completedMissions: observable,
  defaultWorldId: observable,
  desiredItems: observable,
  mapBuilderGrid: observable,
  mapBuilderWorld: observable,
  questStatus: observable,
  showBookPicker: observable,
  showWorldBuilder: observable,
  unlockedSubQuests: observable,
  visitedScenes: observable,
  lockedScenes: observable,
})

const localStateStore = new LocalStateStore()
export default localStateStore
