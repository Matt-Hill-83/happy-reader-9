export default class Constants {
  // CONSTANTS ---------------------------------- start ---------------------------
  static triggers = {
    triggerTypes: {
      LOCK: "lock",
      UNLOCK: "unlock",
      HIDE: "hide",
      UNHIDE: "unhide",
      UPDATE_FRAME_SET: "updateFrameSet",
    },
    baseConditions: {
      COMPLETED_MISSION: "completedMission",
      CURRENT_MISSION: "currentMission",
      COMPLETED_SCENE: "completedScene",
      POCKET_CONTAINS: "pocketContains",
    },
  }
}

Constants.triggers.specialConditions = {
  [Constants.triggers.triggerTypes.UPDATE_FRAME_SET]: {
    FRAME_SET_INDEX: "frameSetIndex",
  },
}
