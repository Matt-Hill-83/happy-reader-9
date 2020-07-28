import React, { useEffect } from "react"
import cx from "classnames"
import { Button, Classes, ButtonGroup } from "@blueprintjs/core"
import { toJS } from "mobx"
import _get from "lodash.get"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

import { getSubQuestTableConfigFunc } from "./SubQuestTableConfig"
import DataTable3 from "../DataTable3/DataTable3"
import SimpleSelectObj from "../SimpleSelectObj/SimpleSelectObj"

import css from "./SubQuestWizard.module.scss"

export default function SubQuestWizard({ props }) {
  const [questConfig, setQuestConfig] = React.useState([])
  const { onSave, scenes } = props

  const renderScenes = ({ scenes }) => {
    const realScenes = props.scenes

    return scenes.map((scene) => {
      const onChangeScene = (newItem) => {
        const { location, id } = newItem
        scene.name = location.name
        scene.id = id
      }
      const defaultValue = realScenes.find((item) => item.id === scene.id)

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
          {renderTriggers({ triggers: scene.sceneTriggers })}
        </div>
      )
    })
  }

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

  const renderTriggers = ({ triggers }) => {
    const tableChangeCallback = ({ newValue, tableMeta, propertyName }) => {
      console.log("newValue", newValue) // zzz
      console.log("tableMeta", tableMeta) // zzz
      const { rowIndex } = tableMeta

      triggers[rowIndex][propertyName] = newValue
      console.log("triggers", toJS(triggers)) // zzz
    }

    const { options, columns } = getSubQuestTableConfigFunc({
      tableChangeCallback,
    })

    if (!triggers || triggers.length === 0) {
      return null
    }

    const getMuiTheme = () =>
      createMuiTheme({
        overrides: {
          MUIDataTableHeadCell: {
            fixedHeader: {
              display: "none",
            },
          },
          MuiTableCell: {
            root: {
              // display: "none",
            },
          },
        },
      })

    return (
      <DataTable3
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
    questConfig.subQuests.slice(0, 1).map((subQuest) => {
      // questConfig.subQuests.map((subQuest) => {
      const { triggers, scenes, missions = [] } = subQuest

      return (
        <div className={cx(css.subQuest, css.listGroup)}>
          {subQuest.name}
          {/* <div className={cx(css.triggers, css.listGroup)}>
            <span className={cx(css.listGroupTitle)}>Missions</span>
            {renderScenes({ scenes: missions })}
          </div> */}
          <div className={cx(css.triggers, css.listGroup)}>
            <span className={cx(css.listGroupTitle)}>Triggers</span>
            {renderTriggers({ triggers })}
          </div>
          <div className={cx(css.scenes, css.listGroup)}>
            <span className={cx(css.listGroupTitle)}>Scenes</span>
            {renderScenes({ scenes })}
          </div>
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
          Save Changes - triggers
        </Button>
        <Button
          className={css.saveButton}
          onClick={() => props.onClose && props.onClose()}
        >
          Exit
        </Button>
      </ButtonGroup>
    </div>
  )
}
