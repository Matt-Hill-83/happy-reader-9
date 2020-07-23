import React, { useEffect } from "react"
import cx from "classnames"
import { Button, Classes, ButtonGroup } from "@blueprintjs/core"
import MiniTable2 from "../MiniTable2/MiniTable2"
import { toJS } from "mobx"

import "jsoneditor/dist/jsoneditor.css"
import css from "./SubQuestConfigTool.module.scss"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import { subQuestTableConfig } from "./SubQuestTableConfig"

export default function SubQuestConfigTool({ props }) {
  const [questConfig, setQuestConfig] = React.useState([])

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

  const renderScenes = ({ scenes }) => {
    return scenes.map((scene) => {
      return (
        <div className={cx(css.sceneName, css.listItem)}>
          <span className={cx(css.listItemName)}>{scene.name}</span>
        </div>
      )
    })
  }

  const renderTriggers = ({ triggers }) => {
    const { options, columns } = subQuestTableConfig

    return <MUIDataTable data={triggers} columns={columns} options={options} />
  }
  if (!questConfig) {
    return null
  }

  console.log("questConfig", toJS(questConfig)) // zzz
  const renderedItems =
    questConfig.subQuests &&
    questConfig.subQuests.map((subQuest) => {
      const renderedScenes = renderScenes({ scenes: subQuest.scenes })
      const renderedTriggers = renderTriggers({ triggers: subQuest.triggers })

      return (
        <div className={cx(css.subQuest, css.listGroup)}>
          {subQuest.name}
          <div className={cx(css.scenes, css.listGroup)}>
            <span className={cx(css.listGroupTitle)}>Scenes</span>
            {renderedScenes}
          </div>
          <div className={cx(css.triggers, css.listGroup)}>
            <span className={cx(css.listGroupTitle)}>Triggers</span>
            {renderedTriggers}
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
