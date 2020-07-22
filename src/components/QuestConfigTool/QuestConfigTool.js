import React, { useEffect } from "react"
import cx from "classnames"
import { Button, Classes, ButtonGroup } from "@blueprintjs/core"

import "jsoneditor/dist/jsoneditor.css"
import css from "./QuestConfigTool.module.scss"

export default function QuestConfigTool({ props }) {
  const [items, setItems] = React.useState([])

  const onChange = (items) => {
    setItems(items)
    props.onChangeJSON && props.onChangeJSON()
  }

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
    setItems(props.items)
  }, [props.items])

  const renderedItems = props.items.map((item) => {
    return <div className={css.scene}>{item.name}</div>
  })

  return (
    <div className={cx(css.main)}>
      <div className={cx(css.content)}>{renderedItems}</div>
      {/* <div className={cx(css.jsonHolder)} ref={(elem) => (container = elem)} /> */}
      <ButtonGroup
        vertical={false}
        className={cx(Classes.ALIGN_LEFT, css.buttonGroup)}
      >
        <Button
          className={css.saveButton}
          onClick={() => props.onSaveJSON({ items })}
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
