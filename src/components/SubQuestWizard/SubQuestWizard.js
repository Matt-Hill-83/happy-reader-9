import _get from "lodash.get"
import { Button, Classes, ButtonGroup } from "@blueprintjs/core"
import { Checkbox } from "material-ui"
import { TextField } from "@material-ui/core"
import { IconNames } from "@blueprintjs/icons"
import { toJS } from "mobx"
import cx from "classnames"
import React, { useEffect, useState } from "react"

import AddDeleteButtonGroup from "../AddDeleteButtonGroup/AddDeleteButtonGroup"
import Constants from "../../Utils/Constants/Constants"
import DialogBuilder from "../DialogBuilder/DialogBuilder"
import MissionsTable from "../MissionsTable/MissionsTable"
import MyAccordionGroup from "../MyAccordionGroup/MyAccordionGroup"
import SimpleSelectObj from "../SimpleSelectObj/SimpleSelectObj"
import TriggersTable from "../TriggersTable/TriggersTable"
import Utils from "../../Utils/Utils"

import css from "./SubQuestWizard.module.scss"
import MyAccordion from "../MyAccordion/MyAccordion"

export default function SubQuestWizard({ props }) {
  const [questConfig, setQuestConfig] = useState([])
  const [dataTableKey, setDataTableKey] = useState([])
  const [showDialogBuilder, setShowDialogBuilder] = useState(false)
  const [sceneForDialogBuilder, setSceneForDialogBuilder] = useState(null)

  const { onSave } = props

  useEffect(() => {
    // on mount

    // returned function will be called on component unmount
    return () => {}
  }, [])

  // on change in props
  useEffect(() => {
    // TODO: store correct prop
    setQuestConfig(props.questConfig || {})
  }, [props.questConfig])

  const scenes = props.scenes || []

  const renderMissions = ({ missions }) => {
    const missionTableProps = {
      items: missions,
      questConfig,
      saveQuestConfig,
      setQuestConfig,
      scenes,
    }
    return (
      <div className={cx(css.triggers, css.xxxlistGroup)}>
        <MissionsTable props={missionTableProps}></MissionsTable>
      </div>
    )
  }

  const renderScenes = ({ scenes }) => {
    const realScenes = props.scenes

    const onAddScene = ({ rowIndex, before }) => {
      const newElement = Constants.getNewScene({})
      Utils.addArrayElement({
        newElement,
        before,
        index: rowIndex,
        array: scenes || [],
      })

      saveQuestConfig()
    }

    const onDeleteScene = ({ rowIndex }) => {
      Utils.deleteArrayElement({ index: rowIndex, array: scenes })
      saveQuestConfig()
    }

    if (!scenes || scenes.length === 0) {
      return (
        <Button
          onClick={() =>
            onAddScene({
              rowIndex: 0,
              before: false,
            })
          }
          icon={IconNames.ADD}
        >
          Add Scene
        </Button>
      )
    }

    return scenes.map((sceneConfig, sceneIndex) => {
      const onChangeScene = (newItem) => {
        const { location, id } = newItem
        sceneConfig.name = location.name
        sceneConfig.id = id
      }

      let largeImage = sceneConfig.largeImage

      const toggleLargeImage = () => {
        sceneConfig.largeImage = !sceneConfig.largeImage
        saveQuestConfig()
      }

      const realScene = realScenes.find((item) => item.id === sceneConfig.id)

      // create a ref to an empty array so that new triggers added will be in that referenced
      // array
      if (!sceneConfig.sceneTriggers) {
        sceneConfig.sceneTriggers = []
      }
      const triggers = sceneConfig.sceneTriggers
      const sceneHasTriggers = triggers.length > 0

      const openDialogBuilder = ({ scene }) => {
        setSceneForDialogBuilder(scene)
        setShowDialogBuilder(true)
      }

      const moreNestedButtons = (
        <Button
          className={css.xxxsaveButton}
          onClick={() => openDialogBuilder({ scene: realScene })}
        >
          DB
        </Button>
      )

      const renderContent = () => {
        const renderedSceneTriggers = sceneHasTriggers
          ? renderTriggers({ triggers, includeAddButton: false })
          : null
        return renderedSceneTriggers
      }

      const sceneTriggersAccordion = {
        title: (
          <div className={css.scenePickerGroup}>
            <SimpleSelectObj
              className={css.sceneDropdown}
              items={realScenes}
              value={realScene}
              getOptionLabel={(option) => _get(option, "location.name")}
              onChange={onChangeScene}
            />
            <AddDeleteButtonGroup
              props={{
                title: "",
                rowIndex: sceneIndex,
                onDelete: onDeleteScene,
                onAdd: onAddScene,
                moreNestedButtons,
              }}
            />
            <span className={css.mapPickerButton}>
              <Checkbox
                label="big"
                onClick={() => toggleLargeImage()}
                checked={largeImage}
              />
            </span>
            {renderAddTriggerButton({ triggers })}
          </div>
        ),
        expanded: false,
        content: renderContent,
        className: css.sceneTriggersAccordion,
      }

      return <MyAccordion props={sceneTriggersAccordion} />
    })
  }

  const saveQuestConfig = async () => {
    await onSave({ questConfig })
    setDataTableKey(dataTableKey + 1)
  }

  const renderAddTriggerButton = ({ triggers }) => {
    const onAddTriggerRow = ({ rowIndex, before }) => {
      const newElement = Constants.getNewTrigger()
      Utils.addArrayElement({
        newElement,
        before,
        index: rowIndex,
        array: triggers,
      })

      saveQuestConfig()
    }

    if (triggers.length === 0) {
      return (
        <Button
          className={css.addTriggerButton}
          icon={IconNames.ADD}
          onClick={() => {
            onAddTriggerRow({ rowIndex: 0, before: false })
          }}
        >
          Add Trigger
        </Button>
      )
    }
  }

  const renderTriggers = ({ triggers, includeAddButton = true }) => {
    const triggerTableProps = {
      triggers,
      questConfig,
      saveQuestConfig,
      setQuestConfig,
    }

    return (
      <div className={cx(css.triggers, css.xxxlistGroup)}>
        {includeAddButton && renderAddTriggerButton({ triggers })}
        <TriggersTable props={triggerTableProps}></TriggersTable>
      </div>
    )
  }

  const renderSubQuests = () => {
    const subQuests = questConfig.subQuests
    if (!subQuests) {
      return null
    }

    return subQuests.map((subQuest, subQuestIndex) => {
      // create a ref to an empty array so that new triggers added will be in that referenced
      // array
      if (!subQuest.triggers) {
        subQuest.triggers = []
      }
      const { triggers, scenes, missions = [] } = subQuest

      if (!subQuest.scenes) {
        subQuest.scenes = []
      }

      const items = [
        {
          title: <span className={cx(css.listGroupTitle)}>Missions</span>,
          expanded: true,
          className: css.sectionsAccordion,
          content: () => (
            <div className={cx(css.triggers, css.xxxlistGroup)}>
              {renderMissions({ missions })}
            </div>
          ),
        },
        {
          title: <span className={cx(css.listGroupTitle)}>Triggers</span>,
          expanded: true,
          className: css.sectionsAccordion,
          content: () => (
            <div className={cx(css.triggers, css.xxxlistGroup)}>
              {renderTriggers({ triggers })}
            </div>
          ),
        },
        {
          title: <span className={cx(css.listGroupTitle)}>Scenes</span>,
          expanded: true,
          className: css.sectionsAccordion,
          content: () => (
            <div className={cx(css.scenes, css.xxxlistGroup)}>
              {renderScenes({ scenes })}
            </div>
          ),
        },
      ]
      const categoryAccordionProps = { items }

      const onAddScene = ({ rowIndex, before }) => {
        const newElement = Constants.getNewSubQuest({})
        Utils.addArrayElement({
          newElement,
          before,
          index: rowIndex,
          array: subQuests,
        })

        saveQuestConfig()
      }

      const onDeleteScene = ({ rowIndex }) => {
        Utils.deleteArrayElement({ index: rowIndex, array: scenes })
        saveQuestConfig()
      }

      const onChangeValue = ({ value = 0 }) => {
        subQuest.name = value
        saveQuestConfig()
      }

      const subQuestAccordion = {
        title: (
          <div className={css.subQuestHeader}>
            <TextField
              className={css.inputField}
              id="outlined-secondary"
              variant="outlined"
              margin="dense"
              color="secondary"
              defaultValue={subQuest.name}
              onBlur={(event) => onChangeValue({ value: event.target.value })}
            />

            <AddDeleteButtonGroup
              props={{
                title: "",
                rowIndex: subQuestIndex,
                onDelete: onDeleteScene,
                onAdd: onAddScene,
              }}
            />
          </div>
        ),
        expanded: false,
        content: () => <MyAccordionGroup props={categoryAccordionProps} />,
        className: css.subQuestAccordion,
      }

      return <MyAccordion props={subQuestAccordion} />
    })
  }

  let content = null
  if (showDialogBuilder) {
    const dialogBuilderProps = {
      initialValue: "9sadfsa",
      scene: sceneForDialogBuilder,
    }
    content = <DialogBuilder props={dialogBuilderProps}></DialogBuilder>
  } else {
    content = <div className={cx(css.content)}>{renderSubQuests()}</div>
  }

  return (
    <div className={cx(css.main)}>
      {content}
      <ButtonGroup
        vertical={false}
        className={cx(Classes.ALIGN_LEFT, css.buttonGroup)}
      >
        <Button
          className={css.saveButton}
          onClick={() => onSave({ questConfig })}
        >
          Save Changes
        </Button>
        {showDialogBuilder && (
          <Button
            className={css.saveButton}
            onClick={() => setShowDialogBuilder(false)}
          >
            Close DB
          </Button>
        )}
      </ButtonGroup>
    </div>
  )
}
