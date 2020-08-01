import { IconNames } from "@blueprintjs/icons"
import _get from "lodash.get"
import { Button, Classes, ButtonGroup } from "@blueprintjs/core"
import { createMuiTheme } from "@material-ui/core/styles"
import { toJS } from "mobx"
import cx from "classnames"
import React, { useEffect, useState } from "react"

import { getSubQuestTableConfigFunc } from "./SubQuestTableConfig"
import DataTable3 from "../DataTable3/DataTable3"
import MyAccordian from "../MyAccordian/MyAccordian"
import SimpleSelectObj from "../SimpleSelectObj/SimpleSelectObj"

import Utils from "../../Utils/Utils"
import Constants from "../../Utils/Constants/Constants"

import css from "./SubQuestWizard.module.scss"
import AddDeleteButtonGroup from "./AddDeleteButtonGroup"
import DialogBuilder from "../DialogBuilder/DialogBuilder"

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

  const renderMissions = ({ missions }) => {
    const realScenes = props.scenes

    return missions.map((mission) => {
      const onChangeScene = (newItem) => {
        // const { location, id } = newItem
        // mission.name = location.name
        // mission.id = id
      }

      // const defaultValue = missions[0]
      const defaultValue = realScenes.find(
        (thing) => thing.location.name === _get(mission, "item.name") || ""
      )
      return (
        <div className={cx(css.sceneName, css.listItem, css.missionsList)}>
          <span className={cx(css.listItemName)}>{mission.name}</span>
          <span className={cx(css.listItemName)}>{"give the"}</span>

          <SimpleSelectObj
            className={css.sceneDropdown}
            items={realScenes}
            value={defaultValue}
            getOptionLabel={(option) => option.location.name}
            onChange={onChangeScene}
          />
          <span className={cx(css.listItemName)}>{"to the"}</span>
        </div>
      )
    })
  }

  const renderScenes = ({ scenes }) => {
    const realScenes = props.scenes

    const onAddScene = ({ rowIndex, before }) => {
      const newElement = Constants.newScene
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
        <AddDeleteButtonGroup
          props={{
            title: "Add Scene-----",
            rowIndex: 0,
            onDelete: () => {},
            onAdd: onAddScene,
          }}
        />
      )
    }

    return scenes.map((sceneConfig, sceneIndex) => {
      // console.log("sceneConfig", toJS(sceneConfig)) // zzz

      const onChangeScene = (newItem) => {
        const { location, id } = newItem
        sceneConfig.name = location.name
        sceneConfig.id = id
      }
      const realScene = realScenes.find((item) => item.id === sceneConfig.id)

      // create a ref to an empty array so that new triggers added will be in that referenced
      // array
      if (!sceneConfig.sceneTriggers) {
        sceneConfig.sceneTriggers = []
      }
      const triggers = sceneConfig.sceneTriggers

      const openDialogBuilder = ({ scene }) => {
        setSceneForDialogBuilder(scene)
        setShowDialogBuilder(true)
      }

      // const moreButtons = (
      //   <Button
      //     className={css.xxxsaveButton}
      //     onClick={() => openDialogBuilder({ scene: realScene })}
      //   >
      //     DB
      //   </Button>
      // )

      const moreNestedButtons = (
        <Button
          className={css.xxxsaveButton}
          onClick={() => openDialogBuilder({ scene: realScene })}
        >
          DB
        </Button>
      )

      return (
        <div className={cx(css.sceneName, css.listItem)}>
          <div className={css.scenePickerGroup}>
            <AddDeleteButtonGroup
              props={{
                title: "",
                rowIndex: sceneIndex,
                onDelete: onDeleteScene,
                onAdd: onAddScene,
                moreNestedButtons,
              }}
            />
            <SimpleSelectObj
              className={css.sceneDropdown}
              items={realScenes}
              value={realScene}
              getOptionLabel={(option) => option.location.name}
              onChange={onChangeScene}
            />
          </div>
          {renderTriggers({ triggers })}
        </div>
      )
    })
  }

  const saveQuestConfig = async () => {
    await onSave({ questConfig })
    setDataTableKey(dataTableKey + 1)
  }

  const renderTriggers = ({ triggers }) => {
    const onAddTriggerRow = ({ rowIndex, before }) => {
      const newElement = Constants.newTrigger()
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

    const tableChangeCallback = ({ newValue, tableMeta, propertyName }) => {
      const { rowIndex } = tableMeta
      triggers[rowIndex][propertyName] = newValue
    }

    const onDeleteTriggerRow = ({ rowIndex }) => {
      Utils.deleteArrayElement({ index: rowIndex, array: triggers })
      saveQuestConfig()
    }

    const { options, columns } = getSubQuestTableConfigFunc({
      tableChangeCallback,
      onDeleteTriggerRow,
      onAddTriggerRow,
      saveConfig: () => {
        saveQuestConfig()
      },
    })

    const getMuiTheme = () =>
      createMuiTheme({
        overrides: {
          MUIDataTableHeadCell: {
            fixedHeader: {
              display: "none",
            },
          },
          MuiTableCell: {
            root: {},
          },
        },
      })

    return (
      <DataTable3
        key={dataTableKey}
        props={{
          className: css.triggersTable,
          getMuiTheme,
          data: triggers,
          columns,
          options,
        }}
      />
    )
  }
  if (!questConfig) {
    return null
  }

  const renderSubQuests = () => {
    const subQuests = questConfig.subQuests
    if (!subQuests) {
      return null
    }

    // TODO - create a button to add a new scene when there are none
    // TODO - create a button to add a new scene when there are none
    // TODO - create a button to add a new scene when there are none
    // TODO - create a button to add a new scene when there are noneas

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
          expanded: false,
          content: (
            <div className={cx(css.triggers, css.listGroup)}>
              {renderMissions({ missions })}
            </div>
          ),
        },
        {
          title: <span className={cx(css.listGroupTitle)}>Triggers</span>,
          expanded: false,
          content: (
            <div className={cx(css.triggers, css.listGroup)}>
              {renderTriggers({ triggers })}
            </div>
          ),
        },
        {
          title: <span className={cx(css.listGroupTitle)}>Scenes</span>,
          expanded: true,
          content: (
            <div className={cx(css.scenes, css.listGroup)}>
              {renderScenes({ scenes })}
            </div>
          ),
        },
      ]
      const accordianProps = { items }

      const onAddScene = ({ rowIndex, before }) => {
        const newElement = Constants.newScene
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

      return (
        <div className={css.accordianContainer}>
          <div className={css.subQuestHeader}>
            <span className={css.subQuestTitle}>{subQuest.name}</span>
            {/* <Button
              onClick={() =>
                onAddScene({
                  rowIndex: subQuestIndex,
                  before: false,
                })
              }
              icon={IconNames.ADD}
            /> */}
            <AddDeleteButtonGroup
              props={{
                title: "",
                rowIndex: subQuestIndex,
                onDelete: onDeleteScene,
                onAdd: onAddScene,
              }}
            />
          </div>
          <MyAccordian props={accordianProps} />
        </div>
      )
    })
  }

  let content = null
  if (showDialogBuilder) {
    console.log("sceneForDialogBuilder", toJS(sceneForDialogBuilder)) // zzz
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
        {/* <Button
          className={css.saveButton}
          onClick={() => props.onClose && props.onClose()}
        >
          Exit
        </Button> */}
      </ButtonGroup>
    </div>
  )
}
