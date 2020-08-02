import Utils from "../Utils"

export default class Constants {
  static newTrigger = () => {
    return {
      name: "lock",
      conditions: [
        {
          currentMission: 0,
        },
      ],
    }
  }

  static newScene = {
    name: "blank",
    id: "xxx1",
    sceneTriggers: [
      {
        conditions: [
          {
            currentMission: 0,
          },
        ],
        name: "lock",
      },
    ],
  }

  static newSubQuest = {
    name: "new SubQuest",
    triggers: [{ name: "unlock", conditions: [{ frameSetIndex: 0 }] }],
    scenes: [
      {
        sceneTriggers: [
          {
            "0": "unhide",
            name: "lock",
            conditions: [{ currentMission: 0 }],
          },
        ],
        name: "no name",
        id: "yyy",
      },
    ],
    index: 0,
    missions: [
      {
        name: "Feed the pig",
        rewards: [{ name: "gold", amount: 5 }],
        item: { name: "fig" },
        recipient: { name: "pig" },
        missionType: "giveItemToPerson",
      },
    ],
  }

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
