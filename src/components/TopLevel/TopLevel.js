import React from "react"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import _get from "lodash.get"
import { Toaster, Position, ButtonGroup, Button } from "@blueprintjs/core"

import { maps, books } from "../../Stores/InitStores.js"
import { worldNameStore } from "../../Stores/FrameSetStore.js"
import localStateStore from "../../Stores/LocalStateStore/LocalStateStore.js"
import StoryMode from "../StoryMode/StoryMode"
import QuestDialog from "../QuestDialog/QuestDialog.js"
import Utils from "../../Utils/Utils"
import WorldBuilder from "../WorldBuilder/WorldBuilder.js"
import { UserConfigStore } from "../../Stores/UserConfigStore.js"

import css from "./TopLevel.module.scss"
import BookPicker from "../BookPicker/BookPicker.js"
import BookBuilder from "../BookBuilder/BookBuilder.js"

let SHOW_BOOK_PICKER
SHOW_BOOK_PICKER = false
SHOW_BOOK_PICKER = true

let useDefaultWorldId
useDefaultWorldId = true
useDefaultWorldId = false

const defaultWorldInProd = "aH5MjGenT8svEaPaty7G"
const defaultWorldInNonProd = "aH5MjGenT8svEaPaty7G"
const isProdRelease = localStateStore.getIsProdRelease()

const defaultWorldId = isProdRelease
  ? defaultWorldInProd
  : defaultWorldInNonProd

localStateStore.setDefaultWorldId(defaultWorldId)

const toaster = Toaster.create({
  position: Position.TOP,
  className: css.toasterContainer,
  canEscapeKeyClear: true,
})

class TopLevel extends React.Component {
  isProdRelease = localStateStore.getIsProdRelease()

  state = {
    activeScene: undefined,
    showQuestPicker: this.isProdRelease,
    showBookPicker: true,
  }

  async componentWillMount() {
    const defaultWorldId = localStateStore.getDefaultWorldId()

    try {
      await books.fetch()
      console.log("books.docs", toJS(books.docs)) // zzz
    } catch (error) {}

    if (maps.docs && maps.docs[0]) {
      const defaultMap = Utils.getFirstReleasedMap()
      const mapId = _get(defaultMap, "id")

      if (useDefaultWorldId) {
        localStateStore.setActiveMapId(defaultWorldId)
      } else {
        localStateStore.setActiveMapId(mapId)
      }
    }

    localStateStore.setShowBookPicker(true)
    // localStateStore.setShowBookPicker(SHOW_BOOK_PICKER)

    this.init()
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    const worldId = _get(newProps, "match.params.worldId")

    // this.setState({ showQuestPicker: false })

    if (worldId) {
      localStateStore.setActiveMapId(worldId)
      this.init()
    }
  }

  init = () => {
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
    const { critters1 = [], critters2 = [] } = activeFrame

    const activeFrameIndex = localStateStore.getActiveFrameIndex()

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
    if (!map) {
      return
    }
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
    // uncomment this after building feature
    // localStateStore.setShowBookPicker(false)

    this.setState({ showQuestPicker: false })
    this.initWorld()
  }

  toggleBookPicker = () => {
    const show = localStateStore.getShowBookPicker()

    localStateStore.setShowBookPicker(!show)
    // const test2 = localStateStore.getShowBookPicker()
  }

  closeBookPicker = () => {
    localStateStore.setShowBookPicker(false)
  }

  closeQuestPicker = () => {
    this.setState({ showQuestPicker: false })
  }

  openQuestPicker = () => {
    this.setState({ showQuestPicker: true })
  }

  toggleQuestPicker = () => {
    this.setState({ showQuestPicker: !this.state.showQuestPicker })
  }

  renderWorldPicker = () => {
    const { showProd, showQuestPicker } = this.state
    toaster.clear()

    return (
      <QuestDialog
        showProd={showProd}
        closeQuestPicker={this.closeQuestPicker}
        showQuestPicker={showQuestPicker}
        onChangeWorld={this.onChangeWorld}
      />
    )
  }

  renderBookPicker = () => {
    return (
      <BookPicker
        closeQuestPicker={this.closeBookPicker}
        onChangeWorld={this.onChangeWorld}
      />
    )
  }

  renderButtons = () => {
    const isProdRelease = localStateStore.getIsProdRelease()

    return (
      <div className={css.floatingButtons}>
        <ButtonGroup color="primary">
          <Button onClick={this.toggleQuestPicker}>
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
      <div className={css.bookBuilder}>
        {/*--------------------------------------------- <BookBuilder></BookBuilder> */}
        {/* <BookBuilder></BookBuilder> */}
      </div>
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
    const isProdRelease = localStateStore.getIsProdRelease()

    return (
      <div className={`${css.main} ${className}`}>
        {this.renderButtons()}
        {false && this.renderBookBuilder()}
        <StoryMode
          updateActiveScene={this.updateActiveScene}
          activeScene={activeScene}
          openQuestPicker={this.openQuestPicker}
        />
        {!isProdRelease && showBookPicker && this.renderBookPicker()}
        {this.state.showQuestPicker && this.renderWorldPicker()}
      </div>
    )
  }
}

export default observer(TopLevel)
