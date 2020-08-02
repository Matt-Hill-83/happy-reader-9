import localStateStore from "../Stores/LocalStateStore/LocalStateStore.js"
import { toJS } from "mobx"
import _get from "lodash.get"
import Constants from "./Constants/Constants.js"

export default class QuestStatusUtils {
  static getActiveQuestConfig = () => {
    const activeWorld = localStateStore.getActiveWorld()
    const { questConfig } = activeWorld.data
    return questConfig
  }

  static getSubQuestColor = ({ sceneName, world }) => {
    const colors = ["a9def9", "d0f4de", "e4c1f9", "fcf6bd"]

    const parentSubQuestFromScene = this.getParentSubQuestFromScene({
      sceneName,
      world,
    })
    const colorIndex = parentSubQuestFromScene % colors.length
    const backgroundColor = colors[colorIndex]
    const style = {
      "background-color": `#${backgroundColor}`,
    }
    return style
  }

  static getActiveSubQuest = () => {
    const activeWorld = localStateStore.getActiveWorld()
    const { questConfig } = activeWorld.data
    const { subQuests } = questConfig

    const questStatus = localStateStore.getQuestStatus()
    const { activeSubQuestIndex } = questStatus

    return subQuests && subQuests[activeSubQuestIndex]
  }

  static getActiveSubQuestMissions = () => {
    const activeSubQuest = this.getActiveSubQuest()
    return (activeSubQuest && activeSubQuest.missions) || null
  }

  static getSceneTriggersFromScene = ({ sceneId }) => {
    const questConfig = this.getActiveQuestConfig()
    const allScenes = []

    questConfig.subQuests &&
      questConfig.subQuests.forEach((subQuest) => {
        allScenes.push(...subQuest.scenes)
      })

    const foundScene = allScenes.find((scene) => scene.id === sceneId)
    return (foundScene && foundScene.sceneTriggers) || []
  }

  static updateProperty = ({ sceneId, propertyName, value }) => {
    const questStatus = localStateStore.getQuestStatus()
    if (!questStatus[propertyName]) {
      questStatus[propertyName] = []
    }
    if (value === true) {
      // add element to list
      if (!questStatus[propertyName].includes(sceneId)) {
        questStatus[propertyName].push(sceneId)
      }
    } else {
      // remove element from list
      questStatus[propertyName] = questStatus[propertyName].filter(
        (item) => item !== sceneId
      )
    }
    localStateStore.setQuestStatus(questStatus)
  }

  static isSceneLocked = ({ sceneId }) => {
    const questStatus = localStateStore.getQuestStatus()
    const { lockedScenes = [] } = questStatus
    return lockedScenes.includes(sceneId) ? true : false
  }

  static isSceneClouded = ({ sceneId }) => {
    const questStatus = localStateStore.getQuestStatus()
    const { cloudedScenes = [] } = questStatus
    return cloudedScenes.includes(sceneId) ? true : false
  }

  static isSceneHidden = ({ sceneId }) => {
    const questStatus = localStateStore.getQuestStatus()
    const { hiddenScenes = [] } = questStatus
    return hiddenScenes.includes(sceneId) ? true : false
  }

  //
  //
  //
  //
  //
  static calcListOfLockedScenes = () => {
    const activeWorld = localStateStore.getActiveWorld()
    const { newGrid5 } = activeWorld.data

    const questStatus = localStateStore.getQuestStatus()
    const { activeMissionIndex } = questStatus

    newGrid5.forEach((scene) => {
      const sceneTriggers = this.getSceneTriggersFromScene({
        sceneId: scene.id,
      })

      const flags = {
        sceneIsLocked: {
          value: false,
          propertyName: Constants.sceneVisibilityPropNames.LOCKED_SCENES,
        },
        sceneIsHidden: {
          value: false,
          propertyName: Constants.sceneVisibilityPropNames.HIDDEN_SCENES,
        },
        sceneIsClouded: {
          value: false,
          propertyName: Constants.sceneVisibilityPropNames.CLOUDED_SCENES,
        },
      }

      const triggerTypes = Constants.triggers.triggerTypes

      const evaluators = [
        {
          triggerName: triggerTypes.LOCK,
          func: () => (flags.sceneIsLocked.value = true),
        },
        {
          triggerName: triggerTypes.UNLOCK,
          func: () => (flags.sceneIsLocked.value = false),
        },
        {
          triggerName: triggerTypes.HIDE,
          func: () => (flags.sceneIsHidden.value = true),
        },
        {
          triggerName: triggerTypes.UNHIDE,
          func: () => (flags.sceneIsHidden.value = false),
        },
        {
          triggerName: triggerTypes.CLOUD,
          func: () => (flags.sceneIsClouded.value = true),
        },
        {
          triggerName: triggerTypes.UNCLOUD,
          func: () => (flags.sceneIsClouded.value = false),
        },
      ]

      const runEvaluators = ({ trigger }) => {
        evaluators.forEach((evaluator) => {
          if (trigger.name === evaluator.triggerName) {
            evaluator.func()
          }
        })
      }

      // TODO: put an else statement here that says if there are no scene triggers, use the parent
      // subquest triggers
      let myTriggers = null

      if (sceneTriggers && sceneTriggers.length > 0) {
        sceneTriggers.forEach((trigger) => {
          const { conditions = [] } = trigger
          conditions.forEach((condition) => {
            const { currentMission } = condition
            if (currentMission >= 0 && currentMission === activeMissionIndex) {
              // roll the individual result in with the running aggregate result
              runEvaluators({ trigger })
            }
          })
        })
      }

      const flagKeys = Object.keys(flags)

      // Iterate through each accumulated value and update that property in the local store.
      flagKeys.forEach((key) => {
        const value = flags[key]

        this.updateProperty({
          propertyName: value.propertyName,
          sceneId: scene.id,
          value: value.value,
        })
      })
    })
  }

  static getParentSubQuestFromScene = ({ world, sceneName, sceneId }) => {
    const { questConfig } = world
    let parentSubQuest = -1
    questConfig.subQuests &&
      questConfig.subQuests.forEach((subQuest, subQuestIndex) => {
        const subQuestMatch =
          subQuest.scenes &&
          subQuest.scenes.find((scene) => {
            return scene.name === sceneName
          })
        if (subQuestMatch) {
          parentSubQuest = subQuestIndex
        }
      })

    return parentSubQuest
  }

  static incrementActiveSubQuest = () => {
    const questStatus = localStateStore.getQuestStatus()
    questStatus.activeSubQuestIndex++
    localStateStore.setQuestStatus(questStatus)
  }

  static unLockSubQuests = ({ subQuestTriggers = {} }) => {
    const { unHideTriggers, subQuestId } = subQuestTriggers

    const requiredCompletedMission = _get(
      unHideTriggers,
      "completedMission",
      null
    )
    const completedMissions = localStateStore.getCompletedMissions()

    if (completedMissions.includes(requiredCompletedMission)) {
      localStateStore.unLockSubQuestById({ subQuestId })
    }
  }
}
