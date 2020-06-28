import React from "react";
import { observer } from "mobx-react";
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from "@material-ui/core";

import Images from "../../images/images.js";
import Utils from "../../Utils/Utils.js";
import css from "./MiniLocation.module.scss";
import localStateStore from "../../Stores/LocalStateStore/LocalStateStore.js";
import cx from "classnames";
import _get from "lodash.get";

import { toJS } from "mobx";
import MiniTable from "../MiniTable/MiniTable.js";

class MiniLocation extends React.Component {
  defaultDoorIsOpen = {
    left: { image: "doorGreen", open: true },
    right: { image: "doorGreen", open: false },
    top: { image: "doorGreen", open: true },
    bottom: { image: "doorGreen", open: true },
  };

  renderYouMini = () => {
    const you = localStateStore.getYou();
    const youImage = you.creature;

    return (
      <div className={css.miniYou}>
        <img
          className={`${css.characterImageMini} ${css.characterYouMini}`}
          src={Images.creatures[youImage]}
          alt={youImage}
        />
      </div>
    );
  };

  changeDoor = ({ event }) => {
    this.setState({
      // youCreature: event.target.value,
      name: event.target.name,
    });
  };

  async componentWillMount() {
    const {
      scene: { doors },
      isStartScene,
      isEndScene,
    } = this.props;

    this.setState({ isStartScene, isEndScene });

    if (doors) {
      this.setState({ doors });
    }
  }

  componentWillReceiveProps(newProps) {
    const {
      scene: { doors },
      isStartScene,
      isEndScene,
    } = newProps;

    // TODO - do all this for end scene
    // TODO - do all this for end scene
    // TODO - do all this for end scene
    // TODO - do all this for end scene
    // TODO - do all this for end scene
    this.setState({ isStartScene, isEndScene });

    if (doors) {
      this.setState({ doors });
    }
  }

  state = {
    doors: this.defaultDoorIsOpen,
  };

  createDoorPickerOptions = () => {
    const doors = ["doorYellow", "door", "doorGreen"];
    const renderedMenuItems = doors.map((door, index) => {
      const doorImage = Images.doors[door];
      return (
        <MenuItem key={index} value={door}>
          <div className={css.doorPickerItem}>
            <img src={doorImage} alt={"imagex"} />
          </div>
          {/* {door && door.toUpperCase()} */}
        </MenuItem>
      );
    });

    return renderedMenuItems;
  };

  renderButton = ({ className }) => {
    const defaultDoorName = "door";

    return (
      <div className={`${className} ${css.doorPickerContainer}`}>
        <FormControl variant="outlined">
          <Select
            className={css.doorPickerDropdown}
            value={defaultDoorName}
            onChange={(event) => {
              this.changeDoor({ event });
            }}
            input={<OutlinedInput id="outlined-age-simple" />}
          >
            {this.createDoorPickerOptions()}
          </Select>
        </FormControl>
      </div>
    );
  };

  renderCreatures = ({ isActive, creatures }) => {
    const renderedCharacters = creatures.map((creature) => {
      const creatureType = creature && creature.type;

      const image = Images.creatures[creatureType] || null;

      const friend = (
        <img
          className={`${css.characterImageMini} ${css.character1Mini}`}
          src={image}
          alt={creatureType}
        />
      );

      return friend;
    });

    if (isActive) {
      const you = this.renderYouMini();
      renderedCharacters.unshift(you);
    }

    return <div className={css.charactersContainer}>{renderedCharacters}</div>;
  };

  checkIsStartScene = () => {
    const { scene } = this.props;
    scene.isStartScene = !this.state.isStartScene;

    this.props.updateMap &&
      this.props.updateMap({ newProps: { startScene: scene.name } });
    this.setState({ isStartScene: !this.state.isStartScene });
  };

  checkIsEndScene = () => {
    const { scene } = this.props;
    scene.isEndScene = !this.state.isEndScene;

    this.props.updateMap &&
      this.props.updateMap({ newProps: { endScene: scene.name } });
    this.setState({ isEndScene: !this.state.isEndScene });
  };

  render() {
    const {
      scene,
      isActive,
      className,
      // showLabel = true,
      id,
    } = this.props;

    const {
      coordinates,
      // id,
      sceneConfig: { storyIndex, subQuestId = 0 } = {},
    } = scene;

    const questStatus = localStateStore.getQuestStatus();

    const isVisitedScene = localStateStore.isVisitedScene(scene.id);

    const neighbors = Utils.getNeighbors({ coordinates });

    const neighborsArray = Utils.getNeighborsAsArray({ coordinates }).filter(
      (neighbor) => neighbor && neighbor.id
    );

    const neighborWasVisited = neighborsArray.some((neighbor) =>
      localStateStore.isVisitedScene(neighbor && neighbor.id)
    );

    const newFrameSetMission =
      _get(scene, "sceneConfig.newFrameSetConditions.currentMission") || -1;

    const unlockSceneMission =
      _get(scene, "sceneConfig.unlockSceneConditions.currentMission") || -1;
    const frameSet2Unlocked =
      typeof newFrameSetMission === "number" &&
      questStatus.activeMission >= newFrameSetMission;

    const sceneUnlocked =
      typeof unlockSceneMission === "number" &&
      questStatus.activeMission >= unlockSceneMission;

    if (scene && scene.location.name === "goat01") {
      console.log("----------------------------");
      console.log("----------------------------");
      console.log(
        "scene && scene.location.name",
        toJS(scene && scene.location.name)
      ); // zzz
      console.log("scene.sceneConfig", toJS(scene.sceneConfig)); // zzz
      console.log("questStatus.activeMission", toJS(questStatus.activeMission)); //zzz

      console.log("unlockSceneMission", unlockSceneMission); // zzz
      console.log(
        "newFrameSetMission+++++++++++++++++++++++++++++++++++++++++",
        newFrameSetMission
      ); //zzz

      console.log("frameSet2Unlocked--------------------", frameSet2Unlocked); //zzz
      console.log("sceneUnlocked", toJS(sceneUnlocked)); // zzz
    }

    const unlockedSubQuests = localStateStore.getUnlockedSubQuests();
    const subQuestIsUnlocked = unlockedSubQuests.includes(subQuestId);

    const showLock = !frameSet2Unlocked;
    const noCloud = isVisitedScene || subQuestIsUnlocked;
    const showCloud = !noCloud;

    const { items = [], creatures = [] } = scene;
    const locationName = scene.location.name;
    const isBlank = locationName === "blank";

    const localClass = isActive ? css.activeClass : "";
    const locationImage = Images.all[locationName];

    const rockImage = Images.backgrounds["rock"];
    const rockImageVertical = Images.backgrounds["rock02Vertical"];
    const cloudImage = Images.backgrounds["cloud"];
    const lockImage = Images.backgrounds["rock"];
    const defaultDoorImage = Images.backgrounds["door"];

    // let renderedLocationImg = null

    const showLocationOnly = locationName === "roadLeftRight01";

    if (showLocationOnly) {
      const roadLeftRight01 = Images.items["roadLeftRight01"];
      return (
        <div className={`${css.main} ${className} ${localClass}`}>
          <div className={css.container}>
            <div className={css.roadLeftRight01}>
              <img className={css.none} src={roadLeftRight01} alt={"imagex"} />
            </div>
          </div>
        </div>
      );
    }

    let renderedItems;
    renderedItems = items.map((item) => {
      const renderedItem = Images.all[item.name];
      return (
        <img className={css.itemImage} src={renderedItem} alt={"imagex"} />
      );
    });

    if (!locationName) {
      return <div className={`${css.main} ${className} ${localClass}`}></div>;
    }

    const showBottomPath = neighbors[Utils.neighborPositionsEnum.bottom];
    const showRightPath = neighbors[Utils.neighborPositionsEnum.right];

    const colors = ["fcf6bd", "d0f4de", "a9def9", "e4c1f9"];

    const colorIndex = subQuestId % colors.length;
    // const colorIndex = storyIndex % colors.length;
    const backgroundColor = colors[colorIndex];

    const style = {
      "background-color": `#${backgroundColor}`,
    };

    // const columnNames = ["", ""]

    // const tableData = [
    //   ["Gold", "4"],
    //   ["Prizes", "shoes, [white]"],
    // ]

    // const tableProps = {
    //   defaultColumnWidth: 100,
    //   columnWidths: [70, 150],
    // }

    // const firstSceneInfo = (
    //   <div className={css.firstScene}>
    //     <span className={css.storyTitle}>{storyTitle}</span>
    //     <MiniTable
    //       tableProps={tableProps}
    //       columnNames={columnNames}
    //       tableData={tableData}
    //     />
    //   </div>
    // )

    return (
      <div
        key={id}
        id={id}
        // className={cx(
        //   css.main,
        //   className,
        //   {
        //     [css.isStartScene]: this.props.scene.isStartScene,
        //     [css.isBlank]: this.props.scene.isBlank,
        //   },
        //   localClass
        // )}
        className={`${css.main} ${className} ${
          this.props.scene.isStartScene ? css.isStartScene : ""
        } ${isBlank ? css.isBlank : ""} ${localClass} `}
        style={style}
      >
        {!isBlank && (
          <div className={css.container}>
            {/* {firstScene && firstSceneInfo} */}

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
            {(false && renderedItems) || null}

            <div className={css.characters}>
              {this.renderCreatures({ creatures, isActive })}
            </div>

            <span className={css.locationTitle}>{locationName}</span>
          </div>
        )}
      </div>
    );
  }
}

export default observer(MiniLocation);
