import React, { Component } from "react"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import cx from "classnames"

import {
  Button,
  Icon,
  Menu,
  MenuItem,
  Popover,
  Position,
  InputGroup,
  Classes,
  ButtonGroup,
} from "@blueprintjs/core"

import { IconNames } from "@blueprintjs/icons"
import _get from "lodash.get"

import { maps } from "../../Stores/InitStores"
import { worldNameStore } from "../../Stores/FrameSetStore"
import CrudMachine from "../CrudMachine/CrudMachine"
import FrameBuilder from "../FrameBuilder/FrameBuilder"
import FrameSetUploader from "../FrameSetUploader/FrameSetUploader"
import GetSceneConfig from "../GetSceneConfig/GetSceneConfig"
import ImageDisplay from "../ImageDisplay/ImageDisplay"
import images from "../../images/images"
import JsonEditor2 from "../JsonEditor2/JsonEditor2"
import localStateStore from "../../Stores/LocalStateStore/LocalStateStore"
import Utils from "../../Utils/Utils"
import WorldPicker from "../WorldPicker/WorldPicker"
import SubQuestConfigTool from "../SubQuestConfigTool/SubQuestConfigTool"

import css from "./WorldBuilder.module.scss"

const NUM_ROWS_LOCATIONS_GRID = 8
const NUM_COLS_LOCATIONS_GRID = 20

class WorldBuilder extends Component {
  state = {
    sceneToEdit: null,
    showFrameBuilder: false,
    showQuestConfig: false,
    showSceneConfig: false,
    showSubQuestConfigTool: true,
  }

  // Changing this to DidMount breaks things
  async componentWillMount() {
    await worldNameStore.fetch()
    const defaultWorldId = localStateStore.getDefaultWorldId()
    this.onChangeWorld({ mapId: defaultWorldId })
  }

  onChangeWorld = ({ mapId, newWorld }) => {
    this.setState({ showQuestConfig: false })
    // new map
    if (newWorld) {
      this.addNewWorld()
      return
    } else {
      const world = Utils.getMapFromId2({ id: mapId })
      if (!world || !world.data) {
        return
      }

      const {
        data: { gridDimensions, newGrid5 },
      } = world

      const reCreatedScenesGrid = Utils.reCreateGridFromCondensedGrid({
        gridDimensions,
        newGrid5,
      })

      localStateStore.setWorldBuilderWorld(world)
      localStateStore.setWorldBuilderScenesGrid(reCreatedScenesGrid)
    }
  }

  getMapById = (mapId) => {
    const savedWorlds = Utils.getItemsFromDbObj({ dbList: maps })

    return savedWorlds.find((map) => {
      return map.id === mapId
    })
  }

  updateIsReleasedProperty = ({ id }) => {
    const map = this.getMapById(id)
    const released = !map.data.released
    map.update({ released })
  }

  updateReleasedToProd = ({ id }) => {
    const map = this.getMapById(id)
    const releasedToProd = !map.data.releasedToProd
    map.update({ releasedToProd })
  }

  changeTerminalScene = ({ name, scenesList, scene, map, isStartScene }) => {
    scenesList.forEach((scene) => {
      if (isStartScene) {
        scene.isStartScene = false
      } else {
        scene.isEndScene = false
      }
    })

    if (isStartScene) {
      scene.isStartScene = true
      map.data.startSceneId = scene.id
      map.data.startScene = name
    } else {
      scene.isEndScene = true
      map.data.endSceneId = scene.id
      map.data.endScene = name
    }

    Utils.updateMap({ newProps: { ...map.data }, mapToUpdate: map })
  }

  // turn this into a component
  renderTerminalScenePicker = ({ isStartScene }) => {
    const map = localStateStore.getWorldBuilderWorld()
    if (!map) return null

    if (!map.data) {
      return null
    }

    const { startScene, endScene, newGrid5 } = map.data

    const buttonText = isStartScene
      ? `${startScene || "Start Scene"}`
      : `${endScene || "End Scene"}`

    const renderedSceneNames = newGrid5.map((scene, index) => {
      const { name } = scene.location

      const text = (
        <div className={css.mapPickerRow}>
          <span
            className={css.mapPickerRowTitle}
            onClick={() =>
              this.changeTerminalScene({
                name,
                scenesList: newGrid5,
                scene,
                map,
                isStartScene,
              })
            }
          >
            {name}
          </span>
        </div>
      )
      return <MenuItem key={index} text={text} />
    })

    const renderedMapList = <Menu>{renderedSceneNames}</Menu>

    const scenePicker = (
      <Popover
        className={css.worldPickerDropdown}
        portalClassName={css.worldPickerDropdownPopover}
        content={renderedMapList}
        position={Position.BOTTOM}
      >
        <Button icon="share" text={buttonText} />
      </Popover>
    )

    return scenePicker
  }

  editFrameSet = ({ sceneToEdit }) => {
    this.setState({ sceneToEdit, showFrameBuilder: true })
  }

  onExitFrameBuilder = () => {
    this.setState({ sceneToEdit: "", showFrameBuilder: false })
  }

  addNewWorld = async () => {
    let previousMapName =
      toJS(
        worldNameStore.docs &&
          worldNameStore.docs[0] &&
          worldNameStore.docs[0].data.previousMapName
      ) || 100

    const newName = previousMapName + 1
    if (worldNameStore.docs[0]) {
      await worldNameStore.docs[0].update({
        previousMapName: newName,
        // Transitioning to this new name
        previousWorld: newName,
      })
    }
    const { grid, gridDimensions } = this.createNewGrid()

    const newGrid5 = []

    const questConfig = {
      missions: [
        {
          name: "Feed the pig",
          item: { name: "fig" },
          recipient: { name: "pig" },
          rewards: [{ name: "gold", amount: 5 }],
        },
        {
          recipient: { name: "goatInABoat" },
          name: "Feed the goat.",
          rewards: [{ name: "gold", amount: 5 }],
          item: { name: "bun" },
        },
        {
          recipient: { name: "pinky01" },
          name: "Give Pinky a gift.",
          item: { name: "mug" },
          rewards: [{ amount: 5, name: "gold" }],
        },
        {
          recipient: { name: "babyTroll01" },
          name: "Give a Troll a Gift.",
          rewards: [{ name: "gold", amount: 5 }],
          item: { name: "pin" },
        },
      ],
      subQuestTriggersList: [
        { subQuestId: 1, unHideTriggers: { completedMission: 0 } },
        { subQuestId: 2, unHideTriggers: { completedMission: 1 } },
        { subQuestId: 3, unHideTriggers: { completedMission: 2 } },
        { unHideTriggers: { completedMission: 2 }, subQuestId: 4 },
        { unHideTriggers: { completedMission: 3 }, subQuestId: 5 },
      ],
    }

    localStateStore.setWorldBuilderScenesGrid(grid)
    const newMap = {
      name: newName,
      title: "Test Map" + newName,
      newGrid5,
      released: true,
      releasedToProd: true,
      ignore: false,
      gridDimensions,
      questConfig,
    }

    const newMapReturned = await maps.add(newMap)
    localStateStore.setWorldBuilderWorld(newMapReturned)
  }

  onChangeTitle = async ({ event }) => {
    const world = localStateStore.getWorldBuilderWorld()
    world.data.title = event.target.value
    localStateStore.setWorldBuilderWorld(world)
    this.setState({ world })
  }

  saveTitle = async ({ event }) => {
    const title = event.target.value
    await Utils.updateMap({ title })
  }

  createNewGrid = () => {
    const rows = Array(NUM_ROWS_LOCATIONS_GRID).fill(0)
    const columns = Array(NUM_COLS_LOCATIONS_GRID).fill(0)

    const gridDimensions = {
      numRows: NUM_ROWS_LOCATIONS_GRID,
      numCols: NUM_COLS_LOCATIONS_GRID,
    }

    const grid = []

    rows.forEach((row, rowIndex) => {
      const gridRow = []
      columns.forEach((col, colIndex) => {
        const id = Utils.generateUuid()

        const coordinates = {
          col: colIndex,
          row: rowIndex,
        }
        const isLastRow = rowIndex === NUM_ROWS_LOCATIONS_GRID - 1
        const isLastCol = colIndex === NUM_COLS_LOCATIONS_GRID - 1

        const props = {
          isLastRow,
          isLastCol,
          coordinates,
          id,
        }

        const blankScene = Utils.getBlankScene({ props })

        gridRow.push(blankScene)
      })
      grid.push(gridRow)
    })
    return { grid, gridDimensions }
  }

  saveItems = async () => {
    await Utils.updateMap({})
  }

  generateRandomLocation = ({ location, locationNames }) => {
    const randomName =
      locationNames[Math.floor(Math.random() * locationNames.length)]

    location.name = randomName
    Utils.updateMap({})
  }

  // TODO: on save, Crudmachine shoud return the mutated list and a callback should save it
  // in the appropriate place.
  // Right now, CrudMachine simply mutates a reference and calls a generic update.
  // Which is why you can change an item, but you can't add an item.
  renderScenesGrid = () => {
    const scenesGrid = localStateStore.getWorldBuilderScenesGrid()

    const itemRenderer = ({ item }) => {
      return <ImageDisplay item={item} />
    }

    const gridRows = []
    const onSave = this.saveItems
    const buttons = { add: false, trash: false, edit: true }

    const characterImageSets = [images.creatures]
    const doorImageSets = [images.doors]
    const locationImageSets = [images.all]

    const locationNames = Object.keys(images.locations)

    scenesGrid.forEach((row) => {
      const gridRow = []

      row.forEach((scene) => {
        const locations = [scene.location]
        const doorsBottom = [scene.doorBottom]
        const doorsRight = [scene.doorRight]
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

        gridRow.push(
          <div className={css.gridCell}>
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
              {!hideScene && (
                <CrudMachine
                  className={`${css.crudMachine} ${css.doorsBottomMachine}`}
                  items={doorsBottom}
                  itemRenderer={itemRenderer}
                  saveItems={onSave}
                  imageSets={doorImageSets}
                />
              )}

              {!hideScene && (
                <CrudMachine
                  className={`${css.crudMachine} ${css.doorsRightMachine}`}
                  items={doorsRight}
                  itemRenderer={itemRenderer}
                  saveItems={onSave}
                  imageSets={doorImageSets}
                />
              )}
            </div>
          </div>
        )
      })
      gridRows.push(<div className={css.gridRow}>{gridRow}</div>)
    })

    return <div className={css.newGrid}>{gridRows}</div>
  }

  createNewFramesFromJson = ({ frames, sceneConfig }) => {
    // arrays of frames extracted from the json which has an easy to write struture,
    // but need to be transformed.

    // For each frame...
    const newFrames = frames.map((frame) => {
      const { dialogs, frameConfig } = frame
      if (!frameConfig) {
        return []
      }

      // Turn each row of dialog into a json object...
      const newDialogs = this.createNewDialogs({ dialogs })

      const configProps = {}
      if (frameConfig.faces) {
        configProps.faces = frameConfig.faces
      } else {
        configProps.faces = sceneConfig.faces || []
      }

      if (frameConfig.critters1) {
        configProps.critters1 = frameConfig.critters1
      } else {
        const critters1 =
          Utils.getCritters1New({ frameConfig, sceneConfig }) || []
        configProps.critters1 = critters1.map((item) => {
          return { name: item }
        })
      }

      if (frameConfig.critters2) {
        configProps.critters2 = frameConfig.critters2
      } else {
        const critters2 =
          Utils.getCritters2New({ frameConfig, sceneConfig }) || []

        configProps.critters2 = critters2.map((item) => {
          return { name: item }
        })
      }

      // and put the properties into the new Frame...
      const newFrame = Utils.getNewFrame({
        props: { ...configProps, dialog: newDialogs },
      })
      return newFrame
    })

    return newFrames
  }

  createNewDialogs = ({ dialogs }) => {
    if (!dialogs) {
      return []
    }
    const newDialogs = dialogs.map((sentenceObj) => {
      const itemObj = JSON.parse(sentenceObj)
      const itemKey = Object.keys(itemObj)[0]
      const itemValue = itemObj[itemKey]

      let characterIndex = Utils.getCharacterDialogIndex({
        characterName: itemKey,
      })

      return {
        character: itemKey,
        text: itemValue,
        characterIndex,
      }
    })
    return newDialogs
  }

  importWorldFromJson = async ({ newWorld }) => {
    await this.addNewWorld()

    const {
      title = "no title",
      description = "none",
      questConfig = { data: "none" },
    } = newWorld

    // I should probably create a new scenesGrid here, based on the required dimensions
    // I should probably create a new scenesGrid here, based on the required dimensions
    // I should probably create a new scenesGrid here, based on the required dimensions
    const scenesGrid = localStateStore.getWorldBuilderScenesGrid()

    const theScenes = newWorld.scenes2 || newWorld.scenes

    theScenes.forEach((scene, sceneIndex) => {
      const { frames, sceneConfig, frames2 } = scene

      const coordinates = sceneConfig.coordinates || {
        col: sceneIndex,
        row: 0,
      }

      const newBornScene = Utils.getBlankScene({
        props: {
          sceneConfig,
          coordinates,
          location: { name: scene.title },
        },
      })

      if (scene.sceneConfig) {
        Object.assign(newBornScene, scene.sceneConfig)
      }

      newBornScene.frameSet.frames = this.createNewFramesFromJson({
        frames,
        sceneConfig,
      })

      if (frames2 && frames2.length > 0) {
        newBornScene.frameSet.frames2 = this.createNewFramesFromJson({
          frames: frames2,
          sceneConfig,
        })
      }
      scenesGrid[coordinates.row][coordinates.col] = newBornScene
    })

    const newProps = { title: title, description, questConfig }
    // const newProps = { title: title + "---test2", description, questConfig }
    Utils.updateMap({ newProps })
  }

  onChangeJSON = (json) => {
    // this.setState({ jsonUnderEdit: json })
  }

  onSaveJSON = ({ json }) => {
    const world = localStateStore.getWorldBuilderWorld() || {}

    Utils.updateMap({ newProps: { questConfig: json }, mapToUpdate: world })
  }

  onCloseJsonEditor = () => {
    this.setState({ showQuestConfig: false })
  }

  renderSceneConfig = ({ world }) => {
    const { showSceneConfig } = this.state
    console.log("showSceneConfig", showSceneConfig) // zzz
    if (!showSceneConfig) {
      return null
    }

    return (
      <div className={css.buttonHolder}>
        world config for download
        <GetSceneConfig
          className={css.frameSetUploaderBox1}
          onSave={this.onChangeDialog}
          world={world.data}
        />
      </div>
    )
  }

  renderQuestConfig = ({ questConfig }) => {
    const { showQuestConfig } = this.state
    if (!showQuestConfig) {
      return null
    }

    const jsonEditorProps = {
      json: questConfig,
      onChangeJSON: this.onChangeJSON,
      onSaveJSON: this.onSaveJSON,
      onClose: this.onCloseJsonEditor,
    }

    return (
      <div className={css.jsonEditor}>
        <JsonEditor2 props={jsonEditorProps} />
      </div>
    )
  }

  renderQuestConfigTool = ({ questConfig }) => {
    const { showSubQuestConfigTool } = this.state
    if (!showSubQuestConfigTool) {
      return null
    }

    const questConfigToolProps = {
      questConfig: questConfig,
      onChangeJSON: this.onChangeJSON,
      onSaveJSON: this.onSaveJSON,
      onClose: this.onCloseJsonEditor,
    }

    return (
      <div className={css.subQuestConfigTool}>
        <SubQuestConfigTool props={questConfigToolProps} />
      </div>
    )
  }

  renderMainButtonGroup = () => {
    const {
      showQuestConfig,
      showSceneConfig,
      showSubQuestConfigTool,
    } = this.state

    return (
      <ButtonGroup
        // vertical={true}
        className={cx(Classes.ALIGN_LEFT, css.buttonGroup)}
      >
        <Button
          icon="document"
          text="subquest config"
          onClick={() =>
            this.setState({
              showSubQuestConfigTool: !showSubQuestConfigTool,
            })
          }
        />
        <Popover
          content={
            <ButtonGroup
              vertical={true}
              className={cx(Classes.ALIGN_LEFT, css.buttonGroup)}
            >
              <Button
                icon="document"
                text="quest config"
                onClick={() =>
                  this.setState({
                    showQuestConfig: !showQuestConfig,
                  })
                }
              />
              <Button
                icon="document"
                text="get JSON for world"
                onClick={() =>
                  this.setState({
                    showSceneConfig: !showSceneConfig,
                  })
                }
              />
              <FrameSetUploader
                onSave={this.onChangeDialog}
                onImportJson={({ newWorld }) =>
                  this.importWorldFromJson({ newWorld })
                }
              />
            </ButtonGroup>
          }
        >
          <Button icon="document" rightIcon="caret-down" text="Config" />
        </Popover>
      </ButtonGroup>
    )
  }

  render() {
    const { sceneToEdit, showFrameBuilder, showQuestConfig } = this.state

    const world = localStateStore.getWorldBuilderWorld() || {}
    if (!world.data) {
      return null
    }
    const { questConfig = { no: "data" } } = world.data

    // Record title for when map is copied
    this.previousTitle = (world.data && world.data.title) || this.previousTitle

    let title = "no title"
    if (world.data) {
      title = (world.data && world.data.title) || this.previousTitle + " copy"
    }

    return (
      <div className={css.main}>
        {this.renderMainButtonGroup()}
        {this.renderQuestConfigTool({ questConfig })}
        {this.renderSceneConfig({ world })}
        {this.renderQuestConfig({ questConfig })}

        <InputGroup
          value={title}
          id="text-input"
          placeholder="Title"
          onChange={(event) => this.onChangeTitle({ event })}
          onBlur={(event) => this.saveTitle({ event })}
          className={css.titleInput}
        />

        {!showFrameBuilder && (
          <div className={css.header}>
            <div className={css.titles}>
              <div className={css.title}>
                {`World Builder - world: ${world.data && world.data.name}`}
                {` --- ${world.id}`}
              </div>
              start:
              {this.renderTerminalScenePicker({ isStartScene: true })}
              end:
              {this.renderTerminalScenePicker({ isStartScene: false })}
              <div className={css.subTitle}>
                <div className={css.editWorldButtons}>
                  <WorldPicker
                    initialValue={world.data.title}
                    showDelete={true}
                    showReleased={true}
                    showReleasedToProd={true}
                    updateIsReleasedProperty={this.updateIsReleasedProperty}
                    updateReleasedToProd={this.updateReleasedToProd}
                    onChangeWorld={this.onChangeWorld}
                  />

                  <Button
                    text={"+ New Map"}
                    onClick={() => this.onChangeWorld({ newWorld: true })}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {!showFrameBuilder && (
          <div className={css.content}>{this.renderScenesGrid()}</div>
        )}
        {showFrameBuilder && (
          <div className={css.content2}>
            <FrameBuilder
              world={world}
              scene={sceneToEdit}
              onExitFrameBuilder={(frame) => this.onExitFrameBuilder({ frame })}
              updateMap={Utils.updateMap}
            />
          </div>
        )}
      </div>
    )
  }
}
export default observer(WorldBuilder)
