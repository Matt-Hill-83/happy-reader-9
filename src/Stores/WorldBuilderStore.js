import { decorate, observable, toJS } from "mobx"
import _get from "lodash.get"

class WorldBuilderStore {
  mapBuilderGrid = []
  mapBuilderWorld = null

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
}

decorate(WorldBuilderStore, {
  mapBuilderGrid: observable,
  mapBuilderWorld: observable,
})

const worldBuilderStore = new WorldBuilderStore()
export default worldBuilderStore
