import localStateStore from "../Stores/LocalStateStore/LocalStateStore.js"
import { gameConfig, maps, books } from "../Stores/InitStores.js"
import { toJS } from "mobx"
import _get from "lodash.get"
import Constants from "./Constants/Constants.js"

export default class Utils {
  static addArrayElement = ({ newElement, before, index, array }) => {
    const adder = before === true ? 0 : 1
    array.splice(index + adder, 0, newElement)
    console.log("array", toJS(array)) // zzz
  }

  static deleteArrayElement = ({ array, index }) => {
    array.splice(index, 1)
  }

  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  static getActiveQuestConfig = () => {
    const activeWorld = localStateStore.getActiveWorld()
    const { questConfig } = activeWorld.data
    return questConfig
  }

  static getActiveSubQuest = () => {
    const activeWorld = localStateStore.getActiveWorld()
    const { questConfig } = activeWorld.data
    const { subQuests } = questConfig

    const questStatus = localStateStore.getQuestStatus()
    const { activeSubQuestIndex } = questStatus

    return subQuests && subQuests[activeSubQuestIndex]
  }

  static getActiveSubQuestMissions = () => {
    const activeSubQuest = this.getActiveSubQuest()

    return (activeSubQuest && activeSubQuest.missions) || null
  }

  static getSceneTriggersFromScene = ({ sceneId }) => {
    const questConfig = Utils.getActiveQuestConfig()
    const allScenes = []

    questConfig.subQuests &&
      questConfig.subQuests.forEach((subQuest) => {
        allScenes.push(...subQuest.scenes)
      })

    const foundScene = allScenes.find((scene) => scene.id === sceneId)
    return (foundScene && foundScene.sceneTriggers) || []
  }

  static lockScene = ({ sceneId }) => {
    const questStatus = localStateStore.getQuestStatus()
    const { lockedScenes = [] } = questStatus
    if (!lockedScenes.includes(sceneId)) {
      lockedScenes.push(sceneId)
    }
    questStatus.lockedScenes = lockedScenes
    localStateStore.setQuestStatus(questStatus)
  }

  static unLockScene = ({ sceneId }) => {
    const questStatus = localStateStore.getQuestStatus()
    const { lockedScenes = [] } = questStatus
    const filteredScenes = lockedScenes.filter((item) => item !== sceneId)

    questStatus.lockedScenes = filteredScenes
    localStateStore.setQuestStatus(questStatus)
  }

  static isSceneUnlocked = ({ sceneId }) => {
    const lockedScenes = localStateStore.getLockedScenes()
    return lockedScenes.includes(sceneId) ? true : false
  }
  //
  //
  //
  //
  //
  static calcListOfLockedScenes = () => {
    const activeWorld = localStateStore.getActiveWorld()
    const { newGrid5 } = activeWorld.data

    const questStatus = localStateStore.getQuestStatus()
    console.log("questStatus", toJS(questStatus)) // zzz
    const { activeMissionIndex } = questStatus

    newGrid5.forEach((scene) => {
      const sceneTriggers = Utils.getSceneTriggersFromScene({
        sceneId: scene.id,
      })

      let sceneIsLocked = false

      // refactor this to tighten it up
      // refactor this to tighten it up
      // refactor this to tighten it up
      // refactor this to tighten it up
      if (sceneTriggers && sceneTriggers.length > 0) {
        sceneTriggers.forEach((trigger) => {
          if (trigger.name === Constants.triggers.triggerTypes.LOCK) {
            const { conditions = [] } = trigger
            conditions.forEach((condition) => {
              const { currentMission } = condition
              if (currentMission === activeMissionIndex) {
                sceneIsLocked = true
              }
            })
          } else if (trigger.name === Constants.triggers.triggerTypes.UNLOCK) {
            const { conditions = [] } = trigger
            conditions.forEach((condition) => {
              const { currentMission } = condition
              if (currentMission === activeMissionIndex) {
                sceneIsLocked = false
              }
            })
          }
        })
      }
      if (sceneIsLocked) {
        Utils.lockScene({ sceneId: scene.id })
      } else {
        Utils.unLockScene({ sceneId: scene.id })
      }
    })
    const lockedScenes = localStateStore.getLockedScenes()
  }
  //
  //
  //
  //
  //
  //
  static calcListOfHiddenScenes = () => {
    // const scenesGrid = this.getActiveWorldGrid()
    const activeWorld = localStateStore.getActiveWorld()

    const { newGrid5, questConfig } = activeWorld.data
    console.log("questConfig", toJS(questConfig)) // zzz
    console.log("newGrid5", toJS(newGrid5)) // zzz

    newGrid5.forEach((item) => {
      console.log("item.location.name", toJS(item.location.name)) // zzz
      console.log("item", toJS(item)) // zzz
    })

    const hiddenScenes = localStateStore.getHiddenScenes()
    // const sceneTriggers = Utils.getSceneTriggersFromScene({
    //   sceneName,
    // })

    newGrid5.forEach((scene) => {
      const triggers = _get(scene, "sceneConfig.triggers")
      console.log("scene.sceneConfig.triggers", toJS(triggers)) // zzz
      // for each scene, look for the hide trigger in the list
      // // Check if any of the requirements have been met.
      // if
      //
    })
  }

  static getParentSubQuestFromScene = ({ sceneName, sceneId }) => {
    const activeWorld = localStateStore.getActiveWorld()
    const { questConfig } = activeWorld.data
    let parentSubQuest = -1
    questConfig.subQuests &&
      questConfig.subQuests.forEach((subQuest, subQuestIndex) => {
        const subQuestMatch = subQuest.scenes.find(
          (scene) => scene.name === sceneName
        )
        if (subQuestMatch) {
          parentSubQuest = subQuestIndex
        }
      })

    return parentSubQuest
  }

  static getGameConfig = () => {
    const output = _get(gameConfig, "docs[0].data") || {}
    return output
  }

  static incrementActiveSubQuest = () => {
    const questStatus = localStateStore.getQuestStatus()
    questStatus.activeSubQuestIndex++
    localStateStore.setQuestStatus(questStatus)
  }

  static sortWorlds = ({ worlds, keys }) => {
    const sortedWorlds = Utils.sortDataByNestedKey({
      data: worlds.docs,
      keys: keys || ["data", "title"],
      order: "ASC",
    })

    return sortedWorlds
  }

  static sortWorlds2 = ({ worlds }) => {
    const sortedWorlds = Utils.sortDataByNestedKey({
      data: worlds.docs,
      keys: ["data", "title"],
      order: "ASC",
    })

    return sortedWorlds
  }

  static belongsToABook = ({ worldId }) => {
    const owningBooks = []

    let bookFound = false
    books.docs.forEach((book) => {
      const belongstoThisBook = book.data.chapters.includes(worldId)
      if (belongstoThisBook) {
        owningBooks.push(book.data.name)
        bookFound = true
      }
    })

    return bookFound ? owningBooks : null
  }

  static getCharacterDialogIndex = ({ characterId, characterName }) => {
    return Constants.characterDialogIndex[characterName] || 2
  }

  static getItemsFromDbObj = ({ dbList }) => {
    const items = dbList.docs

    const filteredItems = items && items.filter((item) => !item.data.ignore)
    return filteredItems || []
  }

  static getNewFrame = ({ characters, props = {} }) => {
    let allCharacters = []

    if (characters && characters.length) {
      const friendNames = characters.map((creature) => creature.name)
      allCharacters.push(...friendNames)
    }

    const creatureName0 = allCharacters[0] || "kat"
    const creatureName1 = allCharacters[1] || "liz2"

    const critters2 = []
    const critters1 = allCharacters.map((item) => {
      return {
        name: item,
      }
    })

    const newFrame = {
      critters1: critters1,
      critters2,
      faces: [
        { character: creatureName1, characterIndex: 1, face: "happy" },
        { character: creatureName0, characterIndex: 0, face: "happy" },
      ],
      dialog: [
        {
          character: creatureName0,
          characterIndex: 0,
          text: ``,
        },
        {
          character: creatureName1,
          characterIndex: 1,
          text: ``,
        },
        {
          character: creatureName0,
          characterIndex: 0,
          text: ``,
        },
        {
          character: creatureName1,
          characterIndex: 1,
          text: ``,
        },
        {
          character: creatureName0,
          characterIndex: 0,
          text: ``,
        },
        {
          character: creatureName1,
          characterIndex: 1,
          text: ``,
        },
      ],
    }
    props && Object.assign(newFrame, props)

    return newFrame
  }

  static sortDataByKey(data, key, order, tiebreakerKey) {
    const isAscending = order === "ASC"
    return data.sort(function (item1, item2) {
      const val1 = item1[key] ? item1[key].toString().trim().toLowerCase() : ""
      const val2 = item2[key] ? item2[key].toString().trim().toLowerCase() : ""
      if (val1 < val2) {
        return isAscending ? -1 : 1 // Lower if ascending
      } else if (val1 > val2) {
        return isAscending ? 1 : -1 // Higher if ascending
        // for tiebreaker
      } else if (tiebreakerKey) {
        const tiebreakerVal1 = item1[tiebreakerKey]
          ? item1[tiebreakerKey].toString().trim().toLowerCase()
          : ""
        const tiebreakerVal2 = item2[tiebreakerKey]
          ? item2[tiebreakerKey].toString().trim().toLowerCase()
          : ""
        if (tiebreakerVal1 < tiebreakerVal2) {
          return isAscending ? -1 : 1
        } else if (tiebreakerVal1 > tiebreakerVal2) {
          return isAscending ? 1 : -1
        }
      }
      return 0
    })
  }

  // Sorts array of objects based on the value of a deeply nested property.
  // Properties should be ordered sequentially in keys array.
  static sortDataByNestedKey({ data, keys, order }) {
    function getNestedValue(data, keys) {
      let result = data
      keys.forEach((key) => (result ? (result = result[key]) : null))

      return result ? result.toString().toLowerCase() : ""
    }

    const isAscending = order === "ASC"
    return data.sort(function (item1, item2) {
      if (getNestedValue(item1, keys) < getNestedValue(item2, keys)) {
        return isAscending ? -1 : 1 // Lower if ascending
      } else if (getNestedValue(item1, keys) > getNestedValue(item2, keys)) {
        return isAscending ? 1 : -1 // Higher if ascending
      }
      return 0
    })
  }

  static getMapFromId = ({ id }) => {
    const mapsDocs = toJS(maps.docs)
    const defaultMap = this.getFirstReleasedMap() || {}

    if (!id) return defaultMap

    const filteredMaps = mapsDocs.filter((map) => map.data.released)
    const foundMap = filteredMaps
      ? filteredMaps.find((map) => map.id === id)
      : defaultMap

    return foundMap
  }

  static getMapFromId2 = ({ id }) => {
    const mapsDocs = toJS(maps.docs)
    const defaultMap = this.getFirstReleasedMap() || {}

    if (!id) return defaultMap

    const foundMap = mapsDocs
      ? mapsDocs.find((map) => map.id === id)
      : defaultMap

    return foundMap
  }

  static getBookFromId = ({ id }) => {
    const booksDocs = toJS(books.docs)
    return booksDocs.find((map) => map.id === id)
  }

  static getFirstReleasedMap = () =>
    toJS(maps.docs).find((map) => map.data.released)

  static generateUuid() {
    const sepStr = "-"
    let date = new Date().getTime()
    const uuid = `xxxxxxxx${sepStr}xxxx${sepStr}4xxx${sepStr}yxxx${sepStr}xxxxxxxxxxxx`.replace(
      /[xy]/g,
      (c) => {
        const randNum = (date + Math.random() * 16) % 16 | 0
        date = Math.floor(date / 16)
        return (c === "x" ? randNum : (randNum & 0x3) | 0x8).toString(16)
      }
    )
    return uuid
  }

  static getDummyFrame = ({ props }) => {
    const dummyFrame = {
      creatures: ["kat", "liz2"],
      dialog: [
        {
          character: "kat",
          characterIndex: 0,
          text: "Something funny here.",
        },
        {
          character: "liz2",
          characterIndex: 1,
          text: "",
        },
        {
          character: "liz2",
          characterIndex: 0,
          text: "",
        },
        {
          character: "liz2",
          characterIndex: 1,
          text: "",
        },
      ],
      faces: [
        {
          character: "liz2",
          characterIndex: 1,
          face: "happy",
        },
        {
          character: "kat",
          characterIndex: 0,
          face: "kat-happy.9e02afab.png",
        },
      ],
      story: ["I am Kat"],
    }
    props && Object.assign(dummyFrame, props)

    return dummyFrame
  }

  static getBlankScene = ({ props }) => {
    const dummyFrame = this.getNewFrame({ props: {} })

    const id = Utils.generateUuid()

    const blankScene = {
      isStartScene: false,
      isEndScene: false,
      location: { name: "blank" },
      doorRight: { name: "doorYellow" },
      doorBottom: { name: "doorGreen" },
      characters: [{ name: "kat" }, { name: "liz2" }],
      frameSet: { frames: [dummyFrame] },
      id,
    }

    props && Object.assign(blankScene, props)
    return blankScene
  }

  static reCreateGridFromCondensedGrid = ({ gridDimensions, newGrid5 }) => {
    const { numRows, numCols } = gridDimensions

    const maxDimensions = { maxRows: 8, maxCols: 20 }

    const finalRows = Math.min(numRows, maxDimensions.maxRows)
    const finalCols = Math.min(numCols, maxDimensions.maxCols)

    const rows = Array(finalRows).fill(0)
    const columns = Array(finalCols).fill(0)
    const grid = []

    rows.forEach((row, rowIndex) => {
      const gridRow = []
      columns.forEach((col, colIndex) => {
        const coordinates = {
          col: colIndex,
          row: rowIndex,
        }
        const isLastRow = rowIndex === finalRows - 1
        const isLastCol = colIndex === finalCols - 1

        const props = {
          isLastRow,
          isLastCol,
          coordinates,
        }

        const sceneObj =
          newGrid5.find((scene) => {
            if (!scene.coordinates) {
              return Utils.getBlankScene({ props })
            }
            return (
              scene.coordinates.row === rowIndex &&
              scene.coordinates.col === colIndex
            )
          }) || Utils.getBlankScene({ props })

        gridRow.push(sceneObj)
      })
      grid.push(gridRow)
    })

    return grid
  }

  static createCondensedGridFromGrid = ({ world }) => {
    // trim down the grid to just the non-bank scenes and make them accessible by id, instead of
    // defined by the 2 array position

    const condensedGrid = []
    const worldBuilderGrid = localStateStore.getWorldBuilderScenesGrid()

    worldBuilderGrid.forEach((row) => {
      row.forEach((col) => {
        if (col.location.name && col.location.name !== "blank") {
          condensedGrid.push(col)
        }
      })
    })

    return condensedGrid
  }

  static getNeighbor = ({ coordinates, direction }) => {
    const grid = localStateStore.getActiveWorldGrid()

    const neighborPositions = {
      [Constants.neighborPositionsEnum.left]: {
        row: coordinates.row,
        col: coordinates.col - 1,
      },
      [Constants.neighborPositionsEnum.right]: {
        row: coordinates.row,
        col: coordinates.col + 1,
      },
      [Constants.neighborPositionsEnum.bottom]: {
        row: coordinates.row + 1,
        col: coordinates.col,
      },
      [Constants.neighborPositionsEnum.top]: {
        row: coordinates.row - 1,
        col: coordinates.col,
      },
    }

    return grid.find((item) => {
      return (
        (item.coordinates.row === neighborPositions[direction]["row"] &&
          item.coordinates.col === neighborPositions[direction]["col"]) ||
        null
      )
    })
  }

  static getNeighbors = ({ coordinates }) => {
    const directions = Object.keys(Constants.neighborPositionsEnum)
    const neighbors = {}

    directions.forEach((direction) => {
      neighbors[direction] = Utils.getNeighbor({
        coordinates,
        direction,
      })
    })

    return neighbors
  }

  static getNeighborsAsArray = ({ coordinates }) => {
    const directions = Object.keys(Constants.neighborPositionsEnum)
    const neighbors = []

    directions.forEach((direction) => {
      neighbors.push(
        Utils.getNeighbor({
          coordinates,
          direction,
        })
      )
    })

    return neighbors
  }

  static unLockSubQuests = ({ subQuestTriggers = {} }) => {
    const { unHideTriggers, subQuestId } = subQuestTriggers

    // const questStatus = localStateStore.getQuestStatus()

    const requiredCompletedMission = _get(
      unHideTriggers,
      "completedMission",
      null
    )
    const completedMissions = localStateStore.getCompletedMissions()

    if (completedMissions.includes(requiredCompletedMission)) {
      localStateStore.unLockSubQuestById({ subQuestId })
    }
  }

  static updateMap = async ({ newProps = {}, mapToUpdate }) => {
    const map = mapToUpdate || localStateStore.getWorldBuilderWorld()
    Object.assign(map.data, toJS(newProps))

    if (mapToUpdate) {
      const {
        data: { gridDimensions, newGrid5 },
      } = mapToUpdate
    } else {
      // fuck.  everything broke because this does not pull from the correct grid.
      // fuck.  everything broke because this does not pull from the correct grid.
      // fuck.  everything broke because this does not pull from the correct grid.
      // fuck.  everything broke because this does not pull from the correct grid.
      // fuck.  everything broke because this does not pull from the correct grid.
      // fuck.  everything broke because this does not pull from the correct grid.
      // fuck.  everything broke because this does not pull from the correct grid.
      map.data.newGrid5 = Utils.createCondensedGridFromGrid({})
    }

    delete map.data.grid
    await map.update(map.data)
  }

  static getCritters1New = ({ frameConfig, sceneConfig }) => {
    let allCreatures = []
    if (frameConfig.creatures && frameConfig.creatures.length > 0) {
      allCreatures = [...frameConfig.creatures]
    } else {
      allCreatures =
        (sceneConfig.creatures &&
          sceneConfig.creatures.map((item) => item.name)) ||
        []
    }

    let allItems = []

    if (frameConfig.items && frameConfig.items.length > 0) {
      allItems = [...frameConfig.items]
    } else {
      allItems =
        (sceneConfig.items && sceneConfig.items.map((item) => item.name)) || []
    }

    allCreatures.push(...allItems)

    const filteredCharacters = allCreatures.filter((item) => {
      return item && ["liz2", "kat"].includes(item)
    })

    return filteredCharacters
  }

  static getCritters2New = ({ frameConfig, sceneConfig }) => {
    let allCreatures = []
    if (frameConfig.creatures && frameConfig.creatures.length > 0) {
      allCreatures = [...frameConfig.creatures]
    } else {
      allCreatures =
        (sceneConfig.creatures &&
          sceneConfig.creatures.map((item) => item.name)) ||
        []
    }

    let allItems = []

    if (frameConfig.items && frameConfig.items.length > 0) {
      allItems = [...frameConfig.items]
    } else {
      allItems =
        (sceneConfig.items && sceneConfig.items.map((item) => item.name)) || []
    }

    allCreatures.push(...allItems)

    const filteredCharacters = allCreatures.filter((item) => {
      return item && !["liz2", "kat"].includes(item)
    })

    return filteredCharacters
  }

  // static getCritters2 = ({ frame, scene }) => {
  //   let allCreatures = []

  //   const { critters2 = null } = frame

  //   if (critters2 && critters2.length > 0) {
  //     allCreatures = [...frame.critters2.map((item) => item.name)]
  //   } else if (frame.creatures && frame.creatures.length > 0) {
  //     allCreatures = [...frame.creatures]
  //   } else {
  //     allCreatures =
  //       (scene.characters && scene.characters.map((item) => item.name)) || []
  //   }

  //   let allItems = []
  //   if (frame.items && frame.items.length > 0) {
  //     allItems = (frame.items && frame.items.map((item) => item.name)) || []
  //   } else {
  //     allItems = (scene.items && scene.items.map((item) => item.name)) || []
  //   }

  //   allCreatures.push(...allItems)

  //   const filteredCharacters = allCreatures.filter((item) => {
  //     return !["liz2", "kat"].includes(item)
  //   })
  //   return filteredCharacters
  // }
}
