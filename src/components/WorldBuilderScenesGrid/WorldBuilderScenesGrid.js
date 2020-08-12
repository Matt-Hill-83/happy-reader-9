import _get from "lodash.get"
import { Button, Icon } from "@blueprintjs/core"
import { IconNames } from "@blueprintjs/icons"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import cx from "classnames"
import React, { Component } from "react"

import CrudMachine from "../CrudMachine/CrudMachine"
import ImageDisplay from "../ImageDisplay/ImageDisplay"
import images from "../../images/images"
import QuestStatusUtils from "../../Utils/QuestStatusUtils"
import worldBuilderStore from "../../Stores/WorldBuilderStore"
import WorldBuilderUtils from "../../Utils/WorldBuilderUtils"

import css from "./WorldBuilderScenesGrid.module.scss"
class WorldBuilderScenesGrid extends Component {
  state = {}

  saveItems = async () => {
    await this.props.saveItems()
  }

  generateRandomLocation = ({ location, locationNames }) => {
    const randomName =
      locationNames[Math.floor(Math.random() * locationNames.length)]

    location.name = randomName
    WorldBuilderUtils.updateMap({ world: this.props.world })
  }

  // TODO: on save, Crudmachine shoud return the mutated list and a callback should save it
  // in the appropriate place.
  // Right now, CrudMachine simply mutates a reference and calls a generic update.
  editFrameSet = ({ sceneToEdit }) => {
    this.props.editFrameSet && this.props.editFrameSet({ sceneToEdit })
  }

  itemRenderer = ({ item, className }) => {
    return <ImageDisplay className={className} item={item} />
  }

  renderScenesGrid = () => {
    const scenesGrid = worldBuilderStore.getWorldBuilderScenesGrid()
    const gridRows = []

    scenesGrid.forEach((row) => {
      const gridRow = []
      row.forEach((scene) => {
        gridRow.push(this.renderCell({ scene }))
      })
      gridRows.push(<div className={css.gridRow}>{gridRow}</div>)
    })

    return <div className={css.main}>{gridRows}</div>
  }

  renderRandomLocationGenerator = ({ scene }) => {
    const locationNames = Object.keys(images.locations)

    return (
      <div
        className={`${css.crudMachine} ${css.locationMachine}`}
        onClick={() =>
          this.generateRandomLocation({
            location: scene.location,
            locationNames,
          })
        }
      />
    )
  }

  renderCritters1 = ({ className }) => {
    return (
      <div className={css.critters1}>
        {this.itemRenderer({
          item: { name: "sparkle01" },
          className,
        })}
      </div>
    )
  }

  renderCell = ({ scene }) => {
    const buttons = { add: false, trash: false, edit: true }
    const onSave = this.saveItems
    const locationImageSets = [images.all]
    const characterImageSets = [images.creatures]
    const locations = [scene.location]

    const world = worldBuilderStore.getWorldBuilderWorld() || {}
    const backgroundColor = QuestStatusUtils.getSubQuestColor({
      world: world.data,
      sceneId: scene.id,
    })

    const locationCrudMachine = (
      <CrudMachine
        className={`${css.crudMachine} ${css.locationMachine}`}
        items={locations}
        buttons={buttons}
        itemRenderer={this.itemRenderer}
        saveItems={onSave}
        imageSets={locationImageSets}
      />
    )

    const locationPicker =
      scene.location.name === "blank"
        ? this.renderRandomLocationGenerator({})
        : locationCrudMachine

    const characters = scene.characters
    const hideScene = scene.location && scene.location.name === "blank"

    return (
      <div className={css.gridCell} style={backgroundColor}>
        {this.renderCritters1({ className: css.test })}
        {!hideScene && (
          <Button
            className={css.scenePropsButton}
            onClick={() => this.editFrameSet({ sceneToEdit: scene })}
          >
            <Icon icon={IconNames.SETTINGS} />
          </Button>
        )}
        <div className={css.column1}>
          {locationPicker}
          {!hideScene && (
            <CrudMachine
              className={`${css.crudMachine} ${css.itemBox} ${css.charactersMachine}`}
              items={characters}
              itemRenderer={this.itemRenderer}
              saveItems={onSave}
              imageSets={characterImageSets}
            />
          )}
        </div>
      </div>
    )
  }

  render() {
    return this.renderScenesGrid()
  }
}
export default observer(WorldBuilderScenesGrid)
