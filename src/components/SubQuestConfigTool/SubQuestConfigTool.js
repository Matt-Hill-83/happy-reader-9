import React, { useEffect } from "react"
import cx from "classnames"
import { Button, Classes, ButtonGroup } from "@blueprintjs/core"
import { toJS } from "mobx"

import { subQuestTableConfig } from "./SubQuestTableConfig"
import DataTable3 from "../DataTable3/DataTable3"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

import css from "./SubQuestConfigTool.module.scss"

export default function SubQuestConfigTool({ props }) {
  const [questConfig, setQuestConfig] = React.useState([])

  const renderScenes = ({ scenes }) => {
    return scenes.map((scene) => {
      const renderedTriggers = renderTriggers({ triggers: scene.sceneTriggers })

      return (
        <div className={cx(css.sceneName, css.listItem)}>
          <span className={cx(css.listItemName)}>{scene.name}</span>
          {renderedTriggers}
        </div>
      )
    })
  }
  // const onChange = (questConfig) => {
  //   setQuestConfig(questConfig)
  //   props.onChangeJSON && props.onChangeJSON()
  // }

  useEffect(() => {
    // on mount
    console.log("mounted") // zzz

    // returned function will be called on component unmount
    return () => {
      console.log("unmounted") // zzz
    }
  }, [])

  // on change in props
  useEffect(() => {
    // TODO: store correct prop
    setQuestConfig(props.questConfig || {})
  }, [props.questConfig])

  const renderTriggers = ({ triggers }) => {
    const { options, columns } = subQuestTableConfig
    console.log("triggers", toJS(triggers)) // zzz
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

  console.log("questConfig", toJS(questConfig)) // zzz
  const renderedItems =
    questConfig.subQuests &&
    questConfig.subQuests.map((subQuest) => {
      const { triggers, scenes, missions = [] } = subQuest

      return (
        <div className={cx(css.subQuest, css.listGroup)}>
          {subQuest.name}
          <div className={cx(css.triggers, css.listGroup)}>
            <span className={cx(css.listGroupTitle)}>Missions</span>
            {renderScenes({ scenes: missions })}
          </div>
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
          onClick={() => props.onSaveJSON({ questConfig })}
        >
          Save Changes
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
