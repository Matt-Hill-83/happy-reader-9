import { IconNames } from "@blueprintjs/icons"
import _get from "lodash.get"
import { Button, Classes, ButtonGroup } from "@blueprintjs/core"
import { toJS } from "mobx"
import cx from "classnames"
import React, { useEffect, useState } from "react"

import MyTextEditor from "../MyTextEditor/MyTextEditor"
import AddDeleteButtonGroup from "../AddDeleteButtonGroup/AddDeleteButtonGroup"
import css from "./DialogBuilder.module.scss"

export default function DialogBuilder({ props }) {
  // const [questConfig, setQuestConfig] = useState([])

  const { onSave, world, scene } = props
  const scenes = _get(world, "data.newGrid5") || []

  useEffect(() => {
    // on mount

    // returned function will be called on component unmount
    return () => {}
  }, [])

  // on change in props
  useEffect(() => {
    // TODO: store correct prop
    // setQuestConfig(props.questConfig || {})
  }, [props.questConfig])

  let content = ""
  let fakeDivs = []

  scenes.forEach((scene) => {
    const frames = _get(scene, "frameSet.frames") || []
    frames.forEach((frame) => {
      frame.dialog.forEach((dialog) => {
        const newContent = `${dialog.text || ""}\n`
        content += newContent
        fakeDivs.push(
          <div className={css.fakeDiv}>
            <AddDeleteButtonGroup
              props={
                {
                  // rowIndex: tableMeta.rowIndex,
                  // onDelete: onDeleteTriggerRow,
                  // onAdd: onAddItem,
                }
              }
            />
            {newContent}
          </div>
        )
      })
    })
  })

  const dialogBuilderProps = { content, className: css.textEditor }
  console.log("content", toJS(content)) // zzz

  return (
    <div className={css.main}>
      <div className={css.controlPanel}>{fakeDivs}</div>
      <MyTextEditor props={dialogBuilderProps}></MyTextEditor>
    </div>
  )
}
