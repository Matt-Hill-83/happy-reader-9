import localStateStore from "../Stores/LocalStateStore/LocalStateStore.js"
import { gameConfig, maps, books } from "../Stores/InitStores.js"
import { toJS } from "mobx"
import _get from "lodash.get"
import Constants from "./Constants/Constants.js"
import worldBuilderStore from "../Stores/WorldBuilderStore.js"
import WorldBuilderUtils from "./WorldBuilderUtils.js"

export default class Utils {
  static addArrayElement = ({ newElement, before, index, array }) => {
    const adder = before === true ? 0 : 1
    array.splice(index + adder, 0, newElement)
  }

  static getAllItemsInScene = ({ scene }) => {
    const allItems = []
    scene.frameSet.frames.forEach((item) => {
      allItems.push(...toJS(item.critters1), ...toJS(item.critters2))
    })
    return allItems
  }

  static addIdToAllItemsInScene = ({ scene }) => {
    const allItems = []
    scene.frameSet.frames.forEach((item) => {
      allItems.push(...item.critters1, ...item.critters2)
    })
    allItems.forEach((item) => {
      if (!item.id) {
        item.id = Utils.generateUuid()
      }
    })
  }

  static getAllItemsInScenes = ({ scenes }) => {
    const allItems = {}
    scenes.forEach((scene) => {
      const items = Utils.getAllItemsInScene({ scene })
      items.forEach((item) => {
        if (!allItems[item.name]) {
          item.sceneId = scene.id

          allItems[item.name] = item
        }
      })
    })
    return Object.values(allItems)
  }

  static getSimpleSceneObjects = ({ scenes }) => {
    return scenes.map((scene) => {
      return { name: scene.location.name, id: scene.id }
    })
  }

  static deleteArrayElement = ({ array, index }) => {
    array.splice(index, 1)
  }

  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  static getGameConfig = () => {
    const output = _get(gameConfig, "docs[0].data") || {}
    return output
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

  static sortScenes = ({ scenes }) => {
    const sortedData = Utils.sortDataByNestedKey({
      data: scenes,
      keys: ["location", "name"],
      order: "ASC",
    })

    return sortedData
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

  static getWorldFromId = ({ id }) => {
    const mapsDocs = toJS(maps.docs)
    const defaultMap = this.getFirstReleasedMap() || {}

    if (!id) return defaultMap

    const filteredMaps = mapsDocs.filter((map) => map.data.released)
    const foundMap = filteredMaps
      ? filteredMaps.find((map) => map.id === id)
      : defaultMap

    return foundMap
  }

  static getWorldFromId2 = ({ id }) => {
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

  static getBlankScene = ({ props }) => {
    const dummyFrame = WorldBuilderUtils.getNewFrame({ props: {} })

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
    const worldBuilderGrid = worldBuilderStore.getWorldBuilderScenesGrid()

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
}
