import React from "react"
import { observer } from "mobx-react"
import { FormControl, MenuItem, OutlinedInput, Select } from "@material-ui/core"

import Images from "../../images/images.js"
import Utils from "../../Utils/Utils.js"
import css from "./MiniLocation.module.scss"
import localStateStore from "../../Stores/LocalStateStore/LocalStateStore.js"
import cx from "classnames"
import _get from "lodash.get"

import { toJS } from "mobx"

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
    const { scene } = this.props
    scene.isEndScene = !this.state.isEndScene

    this.props.updateMap &&
      this.props.updateMap({ newProps: { endScene: scene.name } })
    this.setState({ isEndScene: !this.state.isEndScene })
  }

  render() {
    const { scene, isActive, className, id } = this.props
    const { coordinates, sceneConfig: { subQuestId = 0 } = {} } = scene
    const questStatus = localStateStore.getQuestStatus()
    const isVisitedScene = localStateStore.isVisitedScene(scene.id)
    const neighbors = Utils.getNeighbors({ coordinates })

    // const neighborsArray = Utils.getNeighborsAsArray({ coordinates }).filter(
    //   (neighbor) => neighbor && neighbor.id
    // )

    // const neighborWasVisited = neighborsArray.some((neighbor) =>
    //   localStateStore.isVisitedScene(neighbor && neighbor.id)
    // );

    const unlockSceneMission =
      _get(
        scene,
        "sceneConfig.triggers.unlockSceneConditions.currentMission"
      ) || -1

    const sceneUnlocked =
      typeof unlockSceneMission === "number" &&
      questStatus.activeMission >= unlockSceneMission

    const unlockedSubQuests = localStateStore.getUnlockedSubQuests()

    const subQuestIsUnlocked = unlockedSubQuests.includes(subQuestId)

    const showLock = !sceneUnlocked
    const noCloud = isVisitedScene || subQuestIsUnlocked
    const showCloud = !noCloud

    const locationName = scene.location.name
    const isBlank = locationName === "blank"

    const localClass = isActive ? css.activeClass : ""
    const locationImage = Images.all[locationName]

    const rockImage = Images.backgrounds["rock"]
    const rockImageVertical = Images.backgrounds["rock02Vertical"]
    const cloudImage = Images.backgrounds["cloud"]
    const lockImage = Images.items["lock02"]
    const defaultDoorImage = Images.backgrounds["door"]

    const showLocationOnly = locationName === "roadLeftRight01"

    if (showLocationOnly) {
      const roadLeftRight01 = Images.items["roadLeftRight01"]
      return (
        <div className={`${css.main} ${className} ${localClass}`}>
          <div className={css.container}>
            <div className={css.roadLeftRight01}>
              <img className={css.none} src={roadLeftRight01} alt={"imagex"} />
            </div>
          </div>
        </div>
      )
    }

    if (!locationName) {
      return <div className={`${css.main} ${className} ${localClass}`}></div>
    }

    const showBottomPath = neighbors[Utils.neighborPositionsEnum.bottom]
    const showRightPath = neighbors[Utils.neighborPositionsEnum.right]

    const colors = ["a9def9", "d0f4de", "e4c1f9", "fcf6bd"]

    const colorIndex = subQuestId % colors.length
    const backgroundColor = colors[colorIndex]

    const style = {
      "background-color": `#${backgroundColor}`,
    }

    return (
      <div
        key={id}
        id={id}
        className={`${css.main} ${className} ${
          this.props.scene.isStartScene ? css.isStartScene : ""
        } ${isBlank ? css.isBlank : ""} ${localClass} `}
        style={style}
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
                src={locationImage}
                alt={"imagex"}
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
