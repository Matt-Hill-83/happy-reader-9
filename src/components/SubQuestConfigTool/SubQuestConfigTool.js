import React, { useEffect } from "react"
import cx from "classnames"
import { Button, Classes, ButtonGroup } from "@blueprintjs/core"
import { toJS } from "mobx"

import { subQuestTableConfig } from "./SubQuestTableConfig"
import DataTable3 from "../DataTable3/DataTable3"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import AutoComplete2 from "../AutoComplete2/AutoComplete2"
import _get from "lodash.get"

import css from "./SubQuestConfigTool.module.scss"

export default function SubQuestConfigTool({ props }) {
  const [questConfig, setQuestConfig] = React.useState([])
  const { onSave, scenes } = props
  console.log("scenes", toJS(scenes)) // zzz

  const renderScenes = ({ scenes }) => {
    const items = props.scenes
    const getOptionLabel = (option) => {
      return option.location.name
    }

    return scenes.map((scene) => {
      const onChangeScene = (newItem) => {
        const selectedScene = newItem.value
        const { location, id } = selectedScene

        scene.name = location.name
        scene.id = id
      }

      return (
        <div className={cx(css.sceneName, css.listItem)}>
          <span className={cx(css.listItemName)}>{scene.name}</span>
          <AutoComplete2
            props={{ items, getOptionLabel, onChange: onChangeScene }}
          ></AutoComplete2>
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
    const { options, columns } = subQuestTableConfig
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
        },
      })

    return (
      <DataTable3
        props={{
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
