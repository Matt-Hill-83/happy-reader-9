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

export default function SubQuestWizard({ props }) {
  const [questConfig, setQuestConfig] = useState([])
  const [dataTableKey, setDataTableKey] = useState([])

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

    return scenes.map((scene) => {
      const onChangeScene = (newItem) => {
        const { location, id } = newItem
        scene.name = location.name
        scene.id = id
      }
      const defaultValue = realScenes.find((item) => item.id === scene.id)

      // create a ref to an empty array so that new triggers added will be in that referenced
      // array
      if (!scene.sceneTriggers) {
        scene.sceneTriggers = []
      }
      const triggers = scene.sceneTriggers

      return (
        <div className={cx(css.sceneName, css.listItem)}>
          {/* <span className={cx(css.listItemName)}>{scene.name}</span> */}
          <SimpleSelectObj
            className={css.sceneDropdown}
            items={realScenes}
            value={defaultValue}
            getOptionLabel={(option) => option.location.name}
            onChange={onChangeScene}
          />
          {renderTriggers({ triggers })}
        </div>
      )
    })
  }

  const saveQuestConfig = async () => {
    await onSave({ questConfig })
    setDataTableKey(dataTableKey + 1)
  }

  // renderTriggers
  // renderTriggers
  // renderTriggers
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
              // display: "none",
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

  const renderedItems =
    questConfig.subQuests &&
    questConfig.subQuests.map((subQuest) => {
      // create a ref to an empty array so that new triggers added will be in that referenced
      // array
      if (!subQuest.triggers) {
        subQuest.triggers = []
      }
      const { triggers, scenes = [], missions = [] } = subQuest

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
          expanded: true,
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

      return (
        <div className={css.accordianContainer}>
          <MyAccordian props={accordianProps} />
        </div>
      )
    })

  return (
    <div className={cx(css.main)}>
      <div className={cx(css.content)}>{renderedItems}</div>
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
