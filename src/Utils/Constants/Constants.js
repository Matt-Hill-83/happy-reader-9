import Utils from "../Utils"

export default class Constants {
  static getNewScene = ({ name = "blank" }) => {
    const id = Utils.generateUuid()
    return {
      name,
      id,
      sceneTriggers: [],
    }
  }

  static getNewSubQuest = ({ name = "new SubQuest" }) => {
    const id = Utils.generateUuid()

    const newSubQuest = {
      id,
      name,
      triggers: [],
      scenes: [this.getNewScene({})],
      missions: [Constants.getNewMission()],
    }
    return newSubQuest
  }

  static getNewWorld = ({ props = {} }) => {
    const questConfig = Constants.getNewQuestConfig({ props: {} })
    const defaultProps = {
      name: "My New Name",
      title: "My New Title",
      newGrid5: [],
      released: true,
      releasedToProd: true,
      ignore: false,
      gridDimensions: {},
      questConfig,
    }

    return { ...defaultProps, ...props }
  }

  static getNewQuestConfig = ({ props = {} }) => {
    const id = Utils.generateUuid()

    return {
      id,
      subQuests: [Constants.getNewSubQuest({})],
    }
  }

  static getNewTrigger = () => {
    const id = Utils.generateUuid()
    return {
      id,
      name: "cloud",
      conditions: [
        {
          currentMission: 0,
        },
      ],
    }
  }

  static getNewMission = () => {
    const id = Utils.generateUuid()
    return {
      id,
      name: "Feed the pig",
      missionType: "giveItemToPerson",
      rewards: [{ amount: 5, name: "gold" }],
      recipient: { name: "pig" },
      item: { name: "fig" },
    }
  }

  static getNewDialog = () => {
    const id = Utils.generateUuid()
    return {
      id,
      character: "empty",
      text: "----------------------------",
    }
  }

  static posableCharacters = ["liz2", "kat"]

  static neighborPositionsEnum = {
    left: "left",
    right: "right",
    bottom: "bottom",
    top: "top",
  }

  static characterDialogIndex = {
    kat: 0,
    liz2: 1,
    katieKooper01: 1,
    rori: 3,
    troll01: 2,
    troll02: 3,
    anna02: 2,
    angus01: 3,
    pup01: 2,
    dog01: 3,
    trumpetGirl01: 2,
    sweaterGirl01: 3,
    dennisTheMenace: 3,
    crow01: 1,
    queenZupula01: 1,
    elf: 2,
    babyTroll01: 2,
    rose01: 2,
    cub: 1,
    goat01: 0,
    coldGirl: 3,
    merida02: 3,
  }

  static subQuestColors = [
    "a9def9",
    "d0f4de",
    "e4c1f9",
    "fcf6bd",
    "ffe7bc",
    "ffebf8",
  ]

  static sceneVisibilityPropNames = {
    LOCKED_SCENES: "lockedScenes",
    HIDDEN_SCENES: "hiddenScenes",
    CLOUDED_SCENES: "cloudedScenes",
  }

  static triggers = {
    triggerTypes: {
      LOCK: "lock",
      UNLOCK: "unlock",
      HIDE: "hide",
      UNHIDE: "unhide",
      CLOUD: "cloud",
      UNCLOUD: "uncloud",
      UPDATE_FRAME_SET: "updateFrameSet",
    },
    baseConditions: {
      COMPLETED_MISSION: "completedMission",
      CURRENT_MISSION: "currentMission",
      // not yet implemented
      CURRENT_SUBQUEST: "currentSubQuest",
      COMPLETED_SCENE: "completedScene",
      POCKET_CONTAINS: "pocketContains",
      FRAME_SET_INDEX: "frameSetIndex", // remove this later
    },
  }
}

Constants.triggers.specialConditions = {
  [Constants.triggers.triggerTypes.UPDATE_FRAME_SET]: {
    FRAME_SET_INDEX: "frameSetIndex",
  },
}
