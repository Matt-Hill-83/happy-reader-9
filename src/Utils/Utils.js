import localStateStore from "../Stores/LocalStateStore/LocalStateStore.js"
import { maps } from "../Stores/InitStores.js"
import { toJS } from "mobx"
import _get from "lodash.get"

export default class Utils {
  // CONSTANTS ---------------------------------- start ---------------------------
  static neighborPositionsEnum = {
    left: "left",
    right: "right",
    bottom: "bottom",
    top: "top",
  }

  static characterDialogIndex = {
    kat: 0,
    liz2: 1,
    katieKooper01: 1,
    rori: 3,
    troll01: 2,
    troll02: 3,
    anna02: 2,
    angus01: 3,
    pup01: 2,
    dog01: 3,
    trumpetGirl01: 2,
    sweaterGirl01: 3,
    dennisTheMenace: 3,
    crow01: 1,
    queenZupula01: 1,
    elf: 2,
    babyTroll01: 2,
    rose01: 2,
    cub: 1,
    goat01: 0,
    coldGirl: 3,
    merida02: 3,
  }
  // CONSTANTS ---------------------------------- end ---------------------------

  static getCharacterDialogIndex = ({ characterId, characterName }) => {
    return this.characterDialogIndex[characterName] || 2
  }

  static getWordsByType = ({ words, type, returnName = false }) => {
    const items = words.filter((word) => {
      if (word.data) {
        return word.data.type === type
      }

      return word.type === type
    })

    if (returnName) {
      return items.map((item) => item.name)
    } else {
      return items
    }
  }

  static getRandomItem = ({ items }) =>
    items[Math.floor(Math.random() * items.length)]

  static getRandomWordByType = ({ words, type }) => {
    const output = this.getWordsByType({ words, type }).map((word) => word.name)

    return this.getRandomItem({ items: output })
  }

  static getItemsFromDbObj = ({ dbList }) => {
    const items = dbList.docs

    const filteredItems = items && items.filter((item) => !item.data.ignore)
    return filteredItems || []
  }

  static getNewFrame = ({ characters, props = {} }) => {
    console.log("getNewFrame") // zzz
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
      creatures: allCharacters,
      critters1: critters1,
      critters2: critters2,
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

    // const filteredMaps = mapsDocs.filter((map) => map.data.released)
    const foundMap = mapsDocs
      ? mapsDocs.find((map) => map.id === id)
      : defaultMap

    return foundMap
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
    console.log("getDummyFrame") // zzz

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
    // const dummyFrame = this.getDummyFrame({ props: {} })

    const id = Utils.generateUuid()

    const blankScene = {
      isStartScene: false,
      isEndScene: false,
      location: { name: "blank" },
      doorRight: { name: "doorYellow" },
      doorBottom: { name: "doorGreen" },
      characters: [{ name: "kat" }, { name: "liz2" }],
      // characters: [],
      items: [],
      // items: [{ name: "cup" }, { name: "pin" }],
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

  static createCondensedGridFromGrid = () => {
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
      [Utils.neighborPositionsEnum.left]: {
        row: coordinates.row,
        col: coordinates.col - 1,
      },
      [Utils.neighborPositionsEnum.right]: {
        row: coordinates.row,
        col: coordinates.col + 1,
      },
      [Utils.neighborPositionsEnum.bottom]: {
        row: coordinates.row + 1,
        col: coordinates.col,
      },
      [Utils.neighborPositionsEnum.top]: {
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
    const directions = Object.keys(Utils.neighborPositionsEnum)
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
    const directions = Object.keys(Utils.neighborPositionsEnum)
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

  static unLockSubQuests = ({ subQuestTriggers = [] }) => {
    // console.log("subQuestTriggers", toJS(subQuestTriggers)) // zzz
    const { unHideTriggers, subQuestId } = subQuestTriggers

    const questStatus = localStateStore.getQuestStatus()
    // console.log("questStatus", toJS(questStatus)) // zzz

    const requiredCompletedMission = _get(
      unHideTriggers,
      "completedMission",
      null
    )
    const completedMissions = localStateStore.getCompletedMissions()

    // console.log("unHideTriggers", toJS(unHideTriggers)) // zzz
    // console.log("requiredCompletedMission", toJS(requiredCompletedMission)) // zzz
    // console.log(
    //   "completedMissions+_+_+_+_+_+_+_+_+_---->>>",
    //   toJS(completedMissions)
    // ) // zzz

    if (completedMissions.includes(requiredCompletedMission)) {
      localStateStore.unLockSubQuestById({ subQuestId })
    }
  }
}
