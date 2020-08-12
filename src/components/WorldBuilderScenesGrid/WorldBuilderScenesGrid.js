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

  renderScenesGrid = () => {
    const scenesGrid = worldBuilderStore.getWorldBuilderScenesGrid()

    const itemRenderer = ({ item, className }) => {
      return <ImageDisplay className={className} item={item} />
    }

    const gridRows = []
    const onSave = this.saveItems
    const buttons = { add: false, trash: false, edit: true }
    const characterImageSets = [images.creatures]
    const locationImageSets = [images.all]
    const locationNames = Object.keys(images.locations)

    scenesGrid.forEach((row) => {
      const gridRow = []

      row.forEach((scene) => {
        const locations = [scene.location]
        const characters = scene.characters
        const hideScene = scene.location && scene.location.name === "blank"

        const locationCrudMachine = (
          <CrudMachine
            className={`${css.crudMachine} ${css.locationMachine}`}
            items={locations}
            buttons={buttons}
            itemRenderer={itemRenderer}
            saveItems={onSave}
            imageSets={locationImageSets}
          />
        )

        const randomLocationGenerator = (
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

        const locationPicker =
          scene.location.name === "blank"
            ? randomLocationGenerator
            : locationCrudMachine

        const world = worldBuilderStore.getWorldBuilderWorld() || {}

        const backgroundColor = QuestStatusUtils.getSubQuestColor({
          world: world.data,
          sceneId: scene.id,
        })

        gridRow.push(
          <div className={css.gridCell} style={backgroundColor}>
            <div className={css.critters1}>
              {itemRenderer({
                item: { name: "sparkle01" },
                className: css.test,
              })}
              {/* {itemRenderer({ item: { name: "sparkle01" },className:css.test}} )} */}
            </div>
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
                  itemRenderer={itemRenderer}
                  saveItems={onSave}
                  imageSets={characterImageSets}
                />
              )}
            </div>
          </div>
        )
      })
      gridRows.push(<div className={css.gridRow}>{gridRow}</div>)
    })

    return <div className={css.main}>{gridRows}</div>
  }

  render() {
    return this.renderScenesGrid()
  }
}
export default observer(WorldBuilderScenesGrid)
