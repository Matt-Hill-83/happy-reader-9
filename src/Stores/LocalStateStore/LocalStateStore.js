import { decorate, observable, toJS } from "mobx"
import Utils from "../../Utils/Utils"
import _get from "lodash.get"

class LocalStateStore {
  activeFrameIndex = 0
  activeMapId = null
  activeSceneId = null
  completedMissions = []
  creatures = []
  defaultWorldId = null
  mapBuilderGrid = []
  // maps = []
  showBookPicker = false
  showWorldBuilder = false
  test = null
  unlockedSubQuests = [0]
  visitedScenes = []
  you = {}

  getDefaultWorldId = () => this.defaultWorldId
  setDefaultWorldId = (defaultWorldId) => {
    this.defaultWorldId = defaultWorldId
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
    console.log("unlockSubQuestForActiveScene") // zzz
    const scene = this.getActiveScene()
    const subQuestId = _get(scene, "sceneConfig.subQuestId")
    if (typeof subQuestId === "number") {
      console.log("this.unlockedSubQuests", toJS(this.unlockedSubQuests)) // zzz
      if (!this.unlockedSubQuests.includes(subQuestId)) {
        this.unlockedSubQuests.push(subQuestId)
      }
    }
  }

  unLockSubQuestById = ({ subQuestId }) => {
    console.log("unLockSubQuestById-------------------------->>>") // zzz
    this.unlockedSubQuests.push(subQuestId)
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

  _defaultQuestStatus = {
    activeMission: 0,
    pockets: { gold: { amount: 5 } },
    questConfig: {
      missions: [
        {
          name: "Feed Piggy",
          rewards: [{ name: "gold", amount: 1 }],
          item: { name: "bun" },
          recipient: { name: "pig" },
        },
        {
          name: "Bring Piggy Home",
          rewards: [{ name: "gold", amount: 5 }],
          item: { name: "pig" },
          recipient: { name: "troll" },
        },
      ],
    },
  }

  questStatus = { ...this._defaultQuestStatus }

  getQuestNames = () => this.questStatus.quests.map((item) => item.name)

  getQuestStatus = () => this.questStatus
  setQuestStatus = (questStatus) => {
    this.questStatus = questStatus
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
    const activeMission = this.getActiveMission()
    if (!activeMission) {
      return null
    }
    return activeMission.item
  }

  getDesiredItems = () => {
    const { missions } = this.questStatus.questConfig
    return missions.map((mission) => mission.item)
  }

  getActiveMission = () => {
    const { missions } = this.questStatus.questConfig
    return missions[this.questStatus.activeMission] || null
  }

  getDesiredRecipient = () => {
    const activeMission = this.getActiveMission()
    if (!activeMission) {
      return null
    }
    return activeMission.recipient
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
    const questStatus = this.questStatus

    if (!questStatus.questConfig) {
      return {}
    }
    const { missions } = questStatus.questConfig
    const { pockets } = questStatus

    if (!missions) {
      return {}
    }
    const activeMissionId = questStatus.activeMission
    const activeMission = missions[activeMissionId] || null
    if (!activeMission) {
      return {}
    }

    const isMissionCompleted = this._completeMission({
      charactersInScene,
      questStatus,
    })

    if (isMissionCompleted) {
      this.completedMissions.push(activeMissionId)
      console.log(
        "this.completedMissions------------------------------>>>",
        toJS(this.completedMissions)
      ) //

      // remove item from pocket
      const desiredItem = this.getDesiredItem()

      delete pockets[desiredItem.name]

      activeMission.completed = true
      questStatus.activeMission++

      const newPockets = this.convertItemToObjFormat({
        itemsArray: activeMission.rewards,
      })

      this.addToPockets({ newPockets })
      this.setQuestStatus(questStatus)
    }

    const foundItem = this._findItem({ itemsInScene })
    return {
      foundItem,
      completedMission: isMissionCompleted ? activeMission : false,
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
    // const desiredItem = this.getDesiredItem() || {};
    const desiredItems = this.getDesiredItems() || {}
    const questStatus = this.questStatus

    const { pockets = {} } = questStatus

    const foundItems = []
    desiredItems.forEach((desiredItem2) => {
      const foundItem =
        itemsInScene.find((item) => item.name === desiredItem2.name) || null
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

  getYou = () => this.you
  setYou = (you) => {
    this.you = you
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
  creatures: observable,
  defaultWorldId: observable,
  mapBuilderGrid: observable,
  mapBuilderWorld: observable,
  // maps: observable,
  questStatus: observable,
  showBookPicker: observable,
  showWorldBuilder: observable,
  test: observable,
  unlockedSubQuests: observable,
  visitedScenes: observable,
  you: observable,
})

const localStateStore = new LocalStateStore()
export default localStateStore
