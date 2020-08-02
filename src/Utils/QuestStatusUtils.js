import localStateStore from "../Stores/LocalStateStore/LocalStateStore.js"
import { toJS } from "mobx"
import _get from "lodash.get"
import Constants from "./Constants/Constants.js"

export default class QuestStatusUtils {
  // update new scene visibility props based on rules in subQuest

  // Object getter functions --- START
  static updateSceneVisibilityProps = () => {
    const activeWorld = localStateStore.getActiveWorld()
    const { newGrid5 } = activeWorld.data

    const questStatus = localStateStore.getQuestStatus()
    const { activeMissionIndex } = questStatus
    const questConfig = this.getActiveQuestConfig()
    const { subQuests } = questConfig

    // For each scene, calculate new visibility props based on conditions defined in triggers
    newGrid5.slice(0, 1).forEach((scene) => {
      // newGrid5.forEach((scene) => {
      const sceneTriggers = this.getSceneTriggersFromScene({
        sceneId: scene.id,
      })

      const parentSubQuestIndexFromScene = this.getParentSubQuestIndexFromScene(
        {
          world: activeWorld.data,
          sceneId: scene.id,
        }
      )

      const parentSubQuestFromScene = subQuests[parentSubQuestIndexFromScene]

      console.log("parentSubQuestFromScene", toJS(parentSubQuestFromScene)) // zzz

      const { triggers: subQuestTriggers } = parentSubQuestFromScene
      console.log("subQuestTriggers", toJS(subQuestTriggers)) // zzz

      const accumulatedPropertyValuesForSubQuest = this.calcAccumulatedPropertyValues(
        {
          sceneTriggers: subQuestTriggers,
          scene,
          activeMissionIndex,
        }
      )

      const accumulatedPropertyValuesForScene = this.calcAccumulatedPropertyValues(
        {
          sceneTriggers,
          scene,
          activeMissionIndex,
        }
      )

      console.log(
        "accumulatedPropertyValuesForSubQuest",
        toJS(accumulatedPropertyValuesForSubQuest)
      ) // zzz

      console.log(
        "accumulatedPropertyValuesForScene",
        toJS(accumulatedPropertyValuesForScene)
      ) // zzz

      const combinedProps = {
        ...accumulatedPropertyValuesForSubQuest,
        ...accumulatedPropertyValuesForScene,
      }

      console.log("combinedProps", toJS(combinedProps)) // zzz

      const accumulatedPropertyValues = combinedProps
      // const accumulatedPropertyValues = accumulatedPropertyValuesForScene
      const propertyNames = Object.keys(accumulatedPropertyValues)

      // Iterate through each accumulated value and update that property in the local store.
      propertyNames.forEach((key) => {
        const value = accumulatedPropertyValues[key]

        this.updateProperty({
          propertyName: value.propertyName,
          sceneId: scene.id,
          value: value.value,
        })
      })
    })
  }

  static calcAccumulatedPropertyValues = ({
    sceneTriggers,
    scene,
    activeMissionIndex,
  }) => {
    const propValueAccumulators = {
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
        func: () => (propValueAccumulators.sceneIsLocked.value = true),
      },
      {
        triggerName: triggerTypes.UNLOCK,
        func: () => (propValueAccumulators.sceneIsLocked.value = false),
      },
      {
        triggerName: triggerTypes.HIDE,
        func: () => (propValueAccumulators.sceneIsHidden.value = true),
      },
      {
        triggerName: triggerTypes.UNHIDE,
        func: () => (propValueAccumulators.sceneIsHidden.value = false),
      },
      {
        triggerName: triggerTypes.CLOUD,
        func: () => (propValueAccumulators.sceneIsClouded.value = true),
      },
      {
        triggerName: triggerTypes.UNCLOUD,
        func: () => (propValueAccumulators.sceneIsClouded.value = false),
      },
    ]

    const runEvaluators = ({ trigger }) => {
      evaluators.forEach((evaluator) => {
        if (trigger.name === evaluator.triggerName) {
          evaluator.func()
        }
      })
    }

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

    return propValueAccumulators
  }

  static getActiveQuestConfig = () => {
    const activeWorld = localStateStore.getActiveWorld()
    const { questConfig } = activeWorld.data
    return questConfig
  }

  static getActiveSubQuest = () => {
    const activeWorld = localStateStore.getActiveWorld()
    const { questConfig } = activeWorld.data
    const { subQuests } = questConfig

    const questStatus = localStateStore.getQuestStatus()
    const { activeSubQuestIndex } = questStatus

    return subQuests && subQuests[activeSubQuestIndex]
  }

  static getParentSubQuestIndexFromScene = ({ world, sceneId }) => {
    const { questConfig } = world
    let parentSubQuest = -1
    questConfig.subQuests &&
      questConfig.subQuests.forEach((subQuest, subQuestIndex) => {
        const subQuestMatch =
          subQuest.scenes &&
          subQuest.scenes.find((scene) => {
            return scene.id === sceneId
          })
        if (subQuestMatch) {
          parentSubQuest = subQuestIndex
        }
      })

    return parentSubQuest
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

  static getSubQuestColor = ({ world, sceneId }) => {
    const colors = ["a9def9", "d0f4de", "e4c1f9", "fcf6bd"]

    const parentSubQuestFromScene = this.getParentSubQuestIndexFromScene({
      world,
      sceneId,
    })
    const colorIndex = parentSubQuestFromScene % colors.length
    const backgroundColor = colors[colorIndex]
    const style = {
      "background-color": `#${backgroundColor}`,
    }
    return style
  }
  // Object getter functions --- END

  // Data Manupulation --- START
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
  // Data Manupulation --- END

  // unused
  static incrementActiveSubQuest = () => {
    const questStatus = localStateStore.getQuestStatus()
    questStatus.activeSubQuestIndex++
    localStateStore.setQuestStatus(questStatus)
  }
}
