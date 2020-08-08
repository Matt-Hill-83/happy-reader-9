import localStateStore from "../Stores/LocalStateStore/LocalStateStore.js"
import { toJS } from "mobx"
import _get from "lodash.get"
import Constants from "./Constants/Constants.js"
import Utils from "./Utils.js"

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
    if (!subQuests) {
      return
    }

    // For each scene, calculate new visibility props based on conditions defined in triggers
    // newGrid5.slice(0, 9).forEach((scene) => {
    newGrid5.forEach((scene) => {
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
      const subQuestTriggers = _get(parentSubQuestFromScene, "triggers") || []

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
      console.log("") // zzz
      console.log("") // zzz
      console.log("-----------") // zzz
      console.log("scene.location.name", toJS(scene.location.name)) // zzz
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

      const accumulatedPropertyValues = combinedProps
      console.log("accumulatedPropertyValues", toJS(accumulatedPropertyValues)) // zzz
      // const accumulatedPropertyValues = accumulatedPropertyValuesForScene
      const propertyNames = Object.keys(accumulatedPropertyValues)

      // Iterate through each accumulated value and update that property in the local store.
      propertyNames.forEach((propertyName) => {
        const value = accumulatedPropertyValues[propertyName]

        this.updateProperty({
          propertyName,
          sceneId: scene.id,
          value,
        })
      })
    })
  }

  static calcAccumulatedPropertyValues = ({
    sceneTriggers,
    activeMissionIndex,
  }) => {
    const triggerTypes = Constants.triggers.triggerTypes

    //  The accumulators store the cumulative value of the props while the evaluators run.
    const propValueAccumulators = {
      sceneIsLocked: {
        value: null,
        propertyName: Constants.sceneVisibilityPropNames.LOCKED_SCENES,
      },
      sceneIsHidden: {
        value: null,
        propertyName: Constants.sceneVisibilityPropNames.HIDDEN_SCENES,
      },
      sceneIsClouded: {
        value: null,
        propertyName: Constants.sceneVisibilityPropNames.CLOUDED_SCENES,
      },
    }

    const evaluators = [
      {
        triggerName: triggerTypes.LOCK,
        func: ({ invert }) =>
          (propValueAccumulators.sceneIsLocked.value = invert ? false : true),
      },
      {
        triggerName: triggerTypes.UNLOCK,
        func: ({ invert }) =>
          (propValueAccumulators.sceneIsLocked.value = invert ? true : false),
      },
      {
        triggerName: triggerTypes.HIDE,
        func: ({ invert }) =>
          (propValueAccumulators.sceneIsHidden.value = invert ? false : true),
      },
      {
        triggerName: triggerTypes.UNHIDE,
        func: ({ invert }) =>
          (propValueAccumulators.sceneIsHidden.value = invert ? true : false),
      },
      {
        triggerName: triggerTypes.CLOUD,
        func: ({ invert }) =>
          (propValueAccumulators.sceneIsClouded.value = invert ? false : true),
      },
      {
        triggerName: triggerTypes.UNCLOUD,
        func: ({ invert }) =>
          (propValueAccumulators.sceneIsClouded.value = invert ? true : false),
      },
    ]

    const runEvaluators = ({ trigger, invert }) => {
      evaluators.forEach((evaluator) => {
        // find the single evaluator that corresponds to the trigger in question and run it.
        // evaluators are pretty dumb and just update a prop value in the accumulator.
        if (trigger.name === evaluator.triggerName) {
          evaluator.func({ invert })
        }
      })
    }

    const evaluateCurrentMission = ({
      activeMissionIndex,
      currentMission,
      falseFunc = () => {},
      trueFunc = () => {},
    }) => {
      if (currentMission >= 0) {
        if (currentMission === activeMissionIndex) {
          trueFunc()
        } else {
          falseFunc()
        }
      }
    }

    if (sceneTriggers && sceneTriggers.length > 0) {
      const completedMissions = localStateStore.getCompletedMissions()
      const trueFuncLock = () =>
        (propValueAccumulators.sceneIsLocked.value = true)
      const falseFuncLock = () =>
        (propValueAccumulators.sceneIsLocked.value = false)

      sceneTriggers.forEach((trigger) => {
        if (trigger.name === triggerTypes.LOCK) {
          const { conditions = [] } = trigger
          conditions.forEach((condition) => {
            const { currentMission, completedMission } = condition

            evaluateCurrentMission({
              activeMissionIndex,
              currentMission,
              falseFunc: falseFuncLock,
              trueFunc: trueFuncLock,
            })

            if (
              completedMission >= 0 &&
              completedMissions.includes(completedMission)
            ) {
              propValueAccumulators.sceneIsLocked.value = true
            }
          })

          return
        }

        // I still need to make this like the one above
        // I still need to make this like the one above
        // I still need to make this like the one above
        if (trigger.name === triggerTypes.UNLOCK) {
          const { conditions = [] } = trigger
          conditions.forEach((condition) => {
            const { currentMission, completedMission } = condition

            // for condition: currentMission
            // if (currentMission >= 0) {
            //   if (currentMission === activeMissionIndex) {
            //     propValueAccumulators.sceneIsLocked.value = false
            //   } else {
            //     // propValueAccumulators.sceneIsLocked.value = false
            //   }
            // }
            evaluateCurrentMission({
              activeMissionIndex,
              currentMission,
              trueFunc: falseFuncLock,
            })
            // for condition: completedMission
            if (
              completedMission >= 0 &&
              completedMissions.includes(completedMission)
            ) {
              propValueAccumulators.sceneIsLocked.value = false
            }
          })

          return
        }

        // each execution is goverened by the trigger type
        const { conditions = [] } = trigger
        conditions.forEach((condition) => {
          const { currentMission, completedMission } = condition

          // for condition: currentMission
          if (currentMission >= 0) {
            if (currentMission === activeMissionIndex) {
              runEvaluators({ trigger })
            } else {
              runEvaluators({ trigger, invert: true })
            }
          }

          // for condition: completedMission
          if (
            completedMission >= 0 &&
            completedMissions.includes(completedMission)
          ) {
            // roll the individual result in with the running aggregate result
            runEvaluators({ trigger })
          }
        })
      })
    }

    const output = {}
    const accumulatorKeys = Object.keys(propValueAccumulators)
    accumulatorKeys.forEach((key) => {
      const value = propValueAccumulators[key]

      if (value.value !== null) {
        output[value.propertyName] = value.value
      }
    })

    return output
  }

  static getActiveQuestConfig = () => {
    const activeWorld = localStateStore.getActiveWorld()
    const { questConfig } = activeWorld.data
    return questConfig
  }

  static getActiveSubQuest = ({ world }) => {
    const activeWorld = localStateStore.getActiveWorld()
    const { questConfig } = activeWorld.data
    const { subQuests } = questConfig

    const questStatus = localStateStore.getQuestStatus()
    const { activeSubQuestIndex } = questStatus

    return subQuests && subQuests[activeSubQuestIndex]
  }

  static getParentSubQuestIndexFromScene = ({ world, sceneId }) => {
    if (!world) return 0

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

  static getActiveSubQuestMissions = ({ world }) => {
    const activeSubQuest = this.getActiveSubQuest({ world })
    return (activeSubQuest && activeSubQuest.missions) || null
  }

  static getSceneTriggerConfigFromScene = ({ sceneId }) => {
    const questConfig = this.getActiveQuestConfig()
    const allScenes = []

    questConfig.subQuests &&
      questConfig.subQuests.forEach((subQuest) => {
        allScenes.push(...subQuest.scenes)
      })

    const foundScene = allScenes.find((scene) => scene.id === sceneId)
    return foundScene || {}
  }

  static getSceneTriggersFromScene = ({ sceneId }) => {
    const foundScene = this.getSceneTriggerConfigFromScene({ sceneId })
    return (foundScene && foundScene.sceneTriggers) || []
  }

  static getSubQuestColor = ({ world, sceneId }) => {
    const colors = ["a9def9", "d0f4de", "e4c1f9", "fcf6bd", "ffe7bc", "ffebf8"]

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
