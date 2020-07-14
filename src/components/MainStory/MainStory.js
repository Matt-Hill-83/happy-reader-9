import React from "react"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import _get from "lodash.get"
import { Toaster, Position, ButtonGroup, Button } from "@blueprintjs/core"

import { maps } from "../../Stores/InitStores.js"
import { worldNameStore } from "../../Stores/FrameSetStore.js"
import localStateStore from "../../Stores/LocalStateStore/LocalStateStore.js"
import StoryMode from "../StoryMode/StoryMode"
import QuestDialog from "../QuestDialog/QuestDialog.js"
import Utils from "../../Utils/Utils"
import WorldBuilder from "../WorldBuilder/WorldBuilder.js"
import { UserConfigStore } from "../../Stores/UserConfigStore.js"

import css from "./MainStory.module.scss"
import BookPicker from "../BookPicker/BookPicker.js"
import BookBuilder from "../BookBuilder/BookBuilder.js"

let SHOW_WORLD_BUILDER
SHOW_WORLD_BUILDER = true
SHOW_WORLD_BUILDER = false

let IS_PROD_RELEASE
IS_PROD_RELEASE = true
IS_PROD_RELEASE = false

let SHOW_BOOK_PICKER
SHOW_BOOK_PICKER = true
SHOW_BOOK_PICKER = false

let useDefaultWorldId
useDefaultWorldId = true
useDefaultWorldId = false

const defaultWorldInProd = "mRpN51k8AmA5BqgikVoz"
const defaultWorldInNonProd = "2pFSacsMVNUYILs1y1ZZ"

const defaultWorldId = IS_PROD_RELEASE
  ? defaultWorldInProd
  : defaultWorldInNonProd

localStateStore.setDefaultWorldId(defaultWorldId)

const toaster = Toaster.create({
  position: Position.TOP,
  className: css.toasterContainer,
  canEscapeKeyClear: true,
})

class MainStory extends React.Component {
  state = {
    activeScene: undefined,
    showYouWinModal: IS_PROD_RELEASE,
    showBookPicker: true,
  }

  async componentWillMount() {
    localStateStore.setIsProdRelease(IS_PROD_RELEASE)
    const defaultWorldId = localStateStore.getDefaultWorldId()

    // I need to make these stores shared singletons
    //  Move these to App.js
    await maps.fetch()
    // This needs to be here or WorldBuilder won't work.
    await worldNameStore.fetch()

    if (maps.docs && maps.docs[0]) {
      const defaultMap = Utils.getFirstReleasedMap()
      const mapId = _get(defaultMap, "id")

      if (useDefaultWorldId) {
        localStateStore.setActiveMapId(defaultWorldId)
      } else {
        localStateStore.setActiveMapId(mapId)
      }
    }

    localStateStore.setShowBookPicker(SHOW_BOOK_PICKER)

    if (SHOW_WORLD_BUILDER) {
      this.toggleWorldBuilder()
    } else {
      await this.init()
    }
  }

  init = async () => {
    const savedMaps = Utils.getItemsFromDbObj({ dbList: maps })
    const filteredMaps = savedMaps.filter((map) => map.data.released)

    // TODO - I need to get maps by id, not by index, because I'm filtering them.
    filteredMaps.forEach((map) => {
      const {
        data: { gridDimensions, newGrid5 },
      } = map

      const grid = Utils.reCreateGridFromCondensedGrid({
        gridDimensions,
        maxDimensions: { numRows: 8, numCols: 12 },
        newGrid5,
      })

      map.data.grid = grid
    })

    localStateStore.setShowWorldBuilder(SHOW_WORLD_BUILDER)
    if (SHOW_WORLD_BUILDER) return
    const mapId = localStateStore.getActiveWorldId()
    this.onChangeWorld({ mapId })
  }

  getTerminalScene = ({ start = true }) => {
    const map = localStateStore.getActiveWorld()
    const scenesGrid = _get(map, "data.newGrid5") || []

    const endScene = scenesGrid.find((item) => item.id === map.data.endSceneId)
    const startScene = scenesGrid.find(
      (item) => item.id === map.data.startSceneId
    )
    const terminalScene = start ? startScene : endScene
    const firstScene = scenesGrid[0]
    const lastScene = scenesGrid[scenesGrid.length - 1]

    // If no start and finish scenes are marked, choose some, so the program doesn't break
    return terminalScene || (start ? firstScene : lastScene)
  }

  initWorld = async () => {
    const startScene = this.getTerminalScene({})
    if (!startScene) return

    localStateStore.setVisitedScenes([])
    localStateStore.setUnlockedSubQuests([0])
    this.updateActiveScene({ sceneId: startScene.id })
  }

  updateActiveScene = ({ sceneId }) => {
    localStateStore.setActiveSceneId(sceneId)
    localStateStore.setActiveFrameIndex(0)
    localStateStore.addVisitedScenes(sceneId)

    localStateStore.unlockSubQuestForActiveScene()

    const questStatus = localStateStore.getQuestStatus()
    const { questConfig, hideMissionConsole } = questStatus

    if (!hideMissionConsole) {
      this.updateQuestStatus({ sceneId })
    }

    const subQuestTriggersList = _get(questConfig, "subQuestTriggersList") || []

    subQuestTriggersList.forEach((subQuestTriggers) => {
      Utils.unLockSubQuests({ subQuestTriggers })
    })

    // this.setState({ test: Math.random() })
  }

  updateQuestStatus = () => {
    toaster.clear()
    const activeScene = localStateStore.getActiveScene()

    const { location } = activeScene

    const activeFrame = localStateStore.getFirstFrame() || {}
    console.log("activeFrame", toJS(activeFrame)) // zzz
    const { critters1 = [], critters2 = [] } = activeFrame

    const activeFrameIndex = localStateStore.getActiveFrameIndex()
    console.log("activeFrameIndex", toJS(activeFrameIndex)) // zzz

    const { foundItem, completedMission } = localStateStore.updateQuestState({
      itemsInScene: [location, ...critters1, ...critters2],
      charactersInScene: [location, ...critters1, ...critters2],
    })

    if (foundItem) {
      const message = (
        <div>
          <span>{`You find a ${foundItem.name}.`}</span>
          <br />
          <span>{`You put the ${foundItem.name} in your pocket.`}</span>
        </div>
      )
      toaster.show({
        message,
        className: css.toaster,
        timeout: 30000,
        canEscapeKeyClear: true,
      })
    }

    // TODO: this should probably happen on the last frame.
    if (completedMission) {
      const { rewards, item, recipient, name } = completedMission

      const reward = rewards[0]
      const message = `You give the  ${item.name} to the ${recipient.name}.`

      const message2 = (
        <div>
          <br />
          <span>{`Mission Complete: "${name}".`}</span>
          <br />
          <span>{`You win: ${reward.amount}  ${reward.name}.`}</span>
        </div>
      )
      toaster.show({
        message: message2,
        className: css.toaster,
        timeout: 30000,
      })
      toaster.show({ message, className: css.toaster, timeout: 30000 })
    }

    this.setState({ dummy: new Date() })
  }

  onChangeWorld = ({ mapId }) => {
    console.log(
      "-----------------------mapId---------------------------",
      mapId
    )
    toaster.clear()

    localStateStore.setActiveMapId(mapId)
    const map = localStateStore.getActiveWorld()
    const { questConfig } = map.data

    if (questConfig) {
      const { missions = [] } = questConfig
      const desiredItems = missions.map((mission) => mission.item)

      const clonedQuestConfig = JSON.parse(JSON.stringify(questConfig))

      const combinedPockets = localStateStore.addToPockets({
        newPockets: clonedQuestConfig.pockets,
      })

      localStateStore.setQuestStatus({
        activeMission: 0,
        pockets: combinedPockets,
        questConfig: clonedQuestConfig,
        desiredItems,
      })
    } else {
      localStateStore.setQuestStatus({
        activeMission: 0,
        hideMissionConsole: true,
      })
    }
    localStateStore.setShowBookPicker(false)

    this.setState({ showYouWinModal: false })
    this.initWorld()
  }

  toggleWorldBuilder = () => {
    toaster.clear()
    const showWorldBuilder = localStateStore.getShowWorldBuilder()
    const newShowWorldBuilder = !showWorldBuilder

    localStateStore.setShowWorldBuilder(newShowWorldBuilder)

    if (newShowWorldBuilder === false) {
      this.init()
    }
  }

  toggleBookPicker = () => {
    const test = localStateStore.getShowBookPicker()

    localStateStore.setShowBookPicker(!test)
    const test2 = localStateStore.getShowBookPicker()
  }

  closeBookPicker = () => {
    localStateStore.setShowBookPicker(false)
  }

  closeYouWinModal = () => {
    this.setState({ showYouWinModal: false })
  }

  openYouWinModal = () => {
    this.setState({ showYouWinModal: true })
  }

  toggleYouWinModal = () => {
    this.setState({ showYouWinModal: !this.state.showYouWinModal })
  }

  renderWorldPicker = () => {
    const { showProd, showYouWinModal } = this.state
    toaster.clear()

    return (
      <QuestDialog
        showProd={showProd}
        closeYouWinModal={this.closeYouWinModal}
        showYouWinModal={showYouWinModal}
        onChangeWorld={this.onChangeWorld}
      />
    )
  }

  renderBookPicker = () => {
    return (
      <BookPicker
        closeYouWinModal={this.closeBookPicker}
        onChangeWorld={this.onChangeWorld}
      />
    )
  }

  renderButtons = () => {
    const isProdRelease = localStateStore.getIsProdRelease()

    return (
      <div className={css.floatingButtons}>
        <ButtonGroup color="primary">
          {!isProdRelease && (
            <Button onClick={this.toggleWorldBuilder}>World Builder</Button>
          )}
          <Button onClick={this.toggleYouWinModal}>
            Pick a Single Quest...
          </Button>
          {!isProdRelease && (
            <Button onClick={this.toggleBookPicker}>
              Pick a Book of Quests...
            </Button>
          )}
        </ButtonGroup>
      </div>
    )
  }

  renderBookBuilder = () => {
    return (
      <div className={css.bookBuilder}>{/* <BookBuilder></BookBuilder> */}</div>
    )
  }

  render() {
    console.log("")
    console.log("main story render")

    const { className } = this.props
    const activeWorld = localStateStore.getActiveWorld()
    const showWorldBuilder = localStateStore.getShowWorldBuilder()

    if (showWorldBuilder) {
      return (
        <div className={`${css.main} ${className}`}>
          {showWorldBuilder && <WorldBuilder />}
          {this.renderButtons()}
        </div>
      )
    }

    if (!activeWorld || !activeWorld.data || !activeWorld.data.title) {
      return null
    }

    const activeScene = localStateStore.getActiveScene()
    if (!activeScene) {
      return null
    }

    const showBookPicker = localStateStore.getShowBookPicker()

    return (
      <div className={`${css.main} ${className}`}>
        {this.renderButtons()}
        {this.renderBookBuilder()}

        <StoryMode
          updateActiveScene={this.updateActiveScene}
          activeScene={activeScene}
          openYouWinModal={this.openYouWinModal}
        />
        {!IS_PROD_RELEASE && showBookPicker && this.renderBookPicker()}
        {this.state.showYouWinModal && this.renderWorldPicker()}
      </div>
    )
  }
}

export default observer(MainStory)
