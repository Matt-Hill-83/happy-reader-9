import React from "react"
import { observer } from "mobx-react"
import { FormControl, MenuItem, OutlinedInput, Select } from "@material-ui/core"
import cx from "classnames"
import _get from "lodash.get"
import { toJS } from "mobx"

import Images from "../../images/images.js"
import Utils from "../../Utils/Utils.js"
import Constants from "../../Utils/Constants/Constants.js"
import localStateStore from "../../Stores/LocalStateStore/LocalStateStore.js"

import css from "./MiniLocation.module.scss"
import QuestStatusUtils from "../../Utils/QuestStatusUtils.js"

class MiniLocation extends React.Component {
  defaultDoorIsOpen = {
    left: { image: "doorGreen", open: true },
    right: { image: "doorGreen", open: false },
    top: { image: "doorGreen", open: true },
    bottom: { image: "doorGreen", open: true },
  }

  changeDoor = ({ event }) => {
    this.setState({
      name: event.target.name,
    })
  }

  async componentWillMount() {
    const {
      scene: { doors },
      isStartScene,
      isEndScene,
    } = this.props

    this.setState({ isStartScene, isEndScene })

    if (doors) {
      this.setState({ doors })
    }
  }

  componentWillReceiveProps(newProps) {
    const {
      scene: { doors },
      isStartScene,
      isEndScene,
    } = newProps

    // TODO - do all this for end scene
    // TODO - do all this for end scene
    // TODO - do all this for end scene
    // TODO - do all this for end scene
    // TODO - do all this for end scene
    this.setState({ isStartScene, isEndScene })

    if (doors) {
      this.setState({ doors })
    }
  }

  state = {
    doors: this.defaultDoorIsOpen,
  }

  createDoorPickerOptions = () => {
    const doors = ["doorYellow", "door", "doorGreen"]
    const renderedMenuItems = doors.map((door, index) => {
      const doorImage = Images.doors[door]
      return (
        <MenuItem key={index} value={door}>
          <div className={css.doorPickerItem}>
            <img src={doorImage} alt={"imagex"} />
          </div>
          {/* {door && door.toUpperCase()} */}
        </MenuItem>
      )
    })

    return renderedMenuItems
  }

  renderButton = ({ className }) => {
    const defaultDoorName = "door"

    return (
      <div className={`${className} ${css.doorPickerContainer}`}>
        <FormControl variant="outlined">
          <Select
            className={css.doorPickerDropdown}
            value={defaultDoorName}
            onChange={(event) => {
              this.changeDoor({ event })
            }}
            input={<OutlinedInput id="outlined-age-simple" />}
          >
            {this.createDoorPickerOptions()}
          </Select>
        </FormControl>
      </div>
    )
  }

  renderCreatures = ({ isActive }) => {
    if (!isActive) {
      return null
    }
    const activeFrame = localStateStore.getFirstFrame() || {}
    const { critters1 = [] } = activeFrame

    const renderedCharacters = critters1
      .map((item) => item.name)
      .map((creature) => {
        const image = Images.all[creature] || null

        const friend = (
          <img
            className={`${css.characterImageMini} ${css.character1Mini}`}
            src={image}
            alt={"creatureType"}
          />
        )

        return friend
      })
    return <div className={css.charactersContainer}>{renderedCharacters}</div>
  }

  checkIsStartScene = () => {
    const { scene } = this.props
    scene.isStartScene = !this.state.isStartScene

    this.props.updateMap &&
      this.props.updateMap({ newProps: { startScene: scene.name } })
    this.setState({ isStartScene: !this.state.isStartScene })
  }

  checkIsEndScene = () => {
    const { scene, updateMap = () => {} } = this.props
    scene.isEndScene = !this.state.isEndScene

    updateMap({ newProps: { endScene: scene.name } })
    this.setState({ isEndScene: !this.state.isEndScene })
  }

  render() {
    const { scene, isActive, className, id } = this.props
    const { coordinates, sceneConfig: { subQuestId = 0 } = {} } = scene
    const isVisitedScene = localStateStore.isVisitedScene(scene.id)
    const neighbors = Utils.getNeighbors({ coordinates })

    // const neighborsArray = Utils.getNeighborsAsArray({ coordinates }).filter(
    //   (neighbor) => neighbor && neighbor.id
    // )

    // const neighborWasVisited = neighborsArray.some((neighbor) =>
    //   localStateStore.isVisitedScene(neighbor && neighbor.id)
    // );

    const locationName = scene.location.name
    if (!locationName) {
      return <div className={`${css.main} ${className} ${localClass}`}></div>
    }

    const showNothing = QuestStatusUtils.isSceneHidden({ sceneId: scene.id })
    const isBlank = locationName === "blank" || showNothing
    const localClass = isActive ? css.activeClass : ""

    const cloudImage = Images.backgrounds["cloud"]
    const lockImage = Images.items["lock02"]

    const showLocationOnly = locationName === "roadLeftRight01"

    let locationImage
    let rockImage
    let rockImageVertical
    let defaultDoorImage
    let showBottomPath
    let showRightPath
    let backgroundColor = {
      "background-color": `white`,
    }
    let showLock
    let showCloud

    if (!isBlank) {
      if (showLocationOnly) {
        const roadLeftRight01 = Images.items["roadLeftRight01"]
        return (
          <div className={`${css.main} ${className} ${localClass} `}>
            <div className={css.container}>
              <div className={css.roadLeftRight01}>
                <img
                  className={css.none}
                  src={roadLeftRight01}
                  alt={"imagex"}
                />
              </div>
            </div>
          </div>
        )
      }

      showLock = QuestStatusUtils.isSceneLocked({ sceneId: scene.id })
      showCloud =
        QuestStatusUtils.isSceneClouded({ sceneId: scene.id }) &&
        !isVisitedScene

      locationImage = Images.all[locationName]
      rockImage = Images.backgrounds["rock"]
      rockImageVertical = Images.backgrounds["rock02Vertical"]
      defaultDoorImage = Images.backgrounds["door"]
      showBottomPath = neighbors[Constants.neighborPositionsEnum.bottom]
      showRightPath = neighbors[Constants.neighborPositionsEnum.right]

      const world = localStateStore.getActiveWorld()

      backgroundColor = QuestStatusUtils.getSubQuestColor({
        sceneName: locationName,
        world: world.data,
      })
    }

    const largeLocation =
      false && scene.location.name === "stump" ? css.large : ""

    return (
      <div
        key={id}
        id={id}
        className={`${css.main} ${className} ${
          this.props.scene.isStartScene ? css.isStartScene : ""
        } ${isBlank ? css.isBlank : ""} ${localClass} ${largeLocation}`}
        style={backgroundColor}
      >
        {!isBlank && (
          <div className={css.container}>
            {/* Paths that connect scenes */}
            {showRightPath && (
              <div className={css.rightPath}>
                <img className={css.rockImage} src={rockImage} alt={"imagex"} />
              </div>
            )}
            {showBottomPath && (
              <div className={css.bottomPath}>
                <img
                  className={css.rockImageVertical}
                  src={rockImageVertical}
                  alt={"imagex"}
                />
              </div>
            )}

            {false && <div className={css.hexagon}></div>}
            {showCloud && (
              <div className={css.cloudImageContainer}>
                <img
                  className={css.cloudImage}
                  src={cloudImage}
                  alt={"imagex"}
                />
              </div>
            )}
            {showLock && (
              <div className={css.cloudImageContainer}>
                <img
                  className={css.cloudImage}
                  src={lockImage}
                  alt={"imagex"}
                />
              </div>
            )}

            {/* Right door */}
            {false &&
              this.renderButton({
                position: "right",
                className: css.rightDoor,
                defaultDoorImage: defaultDoorImage,
              })}
            {false &&
              this.renderButton({
                position: "bottom",
                className: css.bottomDoor,
                defaultDoorImage: defaultDoorImage,
              })}
            <div className={css.imagesBox}>
              <img
                className={css.miniLocationImage}
                alt={"imagex"}
                src={locationImage}
              />
            </div>

            <div className={css.characters}>
              {this.renderCreatures({ isActive })}
            </div>

            <span className={css.locationTitle}>{locationName}</span>
          </div>
        )}
      </div>
    )
  }
}

export default observer(MiniLocation)
