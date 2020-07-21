import React, { useEffect } from "react"
import JSONEditor from "jsoneditor"
import cx from "classnames"
import {
  Button,
  Icon,
  Menu,
  MenuItem,
  Popover,
  Position,
  InputGroup,
  Classes,
  ButtonGroup,
} from "@blueprintjs/core"

import "jsoneditor/dist/jsoneditor.css"
import css from "./JsonEditor2.module.scss"

export default function JsonEditor2({ props }) {
  let container
  let jsoneditor

  const [json, setJson] = React.useState([])

  console.log("props.json", props.json) // zzz

  const onChange = (json) => {
    setJson(json)
    console.log("onChange") // zzz
    console.log("json", json) // zzz
    props.onChangeJSON && props.onChangeJSON()
  }

  useEffect(() => {
    console.log("useEffect------------mounting-------------------->>>") // zzz
    const options = {
      mode: "tree",
      onChangeJSON: onChange,
    }
    // on mount
    jsoneditor = new JSONEditor(container, options)
    jsoneditor.set(props.json)

    // returned function will be called on component unmount
    return () => {
      if (jsoneditor) {
        jsoneditor.destroy()
      }
    }
  }, [])

  useEffect(() => {
    console.log("useEffect------------new props.json-------------------->>>") // zzz
    props.json && jsoneditor && jsoneditor.update(props.json)
  }, [props.json])

  return (
    <div className={cx(css.main)}>
      <div
        // className={cx("jsoneditor-react-container")}
        ref={(elem) => (container = elem)}
      />
      <ButtonGroup
        vertical={false}
        className={cx(Classes.ALIGN_LEFT, css.jsonEditorButtonGroup)}
      >
        <Button
          className={css.saveButton}
          onClick={() => props.onSaveJSON({ json })}
        >
          Save Changes
        </Button>
        {/* <Button
          className={css.saveButton}
          onClick={() =>
            this.saveBookChanges({
              questConfig: "test",
              worldId: 5,
            })
          }
        >
          Exit
        </Button> */}
      </ButtonGroup>
    </div>
  )
}
