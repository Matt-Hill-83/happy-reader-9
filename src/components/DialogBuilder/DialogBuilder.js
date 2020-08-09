import { IconNames } from "@blueprintjs/icons"
import _get from "lodash.get"
import { Button, Classes, ButtonGroup } from "@blueprintjs/core"
import { toJS } from "mobx"
import cx from "classnames"
import React, { useEffect, useState } from "react"
import MyTextEditor from "../MyTextEditor/MyTextEditor"

import css from "./DialogBuilder.module.scss"

export default function DialogBuilder({ props }) {
  const [questConfig, setQuestConfig] = useState([])
  const [dataTableKey, setDataTableKey] = useState([])

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
    setQuestConfig(props.questConfig || {})
  }, [props.questConfig])

  let content = ""

  scenes.forEach((scene) => {
    const frames = _get(scene, "frameSet.frames") || []
    frames.forEach((frame) => {
      frame.dialog.forEach((dialog) => {
        content += `${dialog.text || ""}\n`
        // content += `<p>${dialog.text || "empty"}</p>`
      })
    })
  })

  const dialogBuilderProps = { content }
  console.log("content", toJS(content)) // zzz
  return (
    <div className={css.main}>
      <MyTextEditor props={dialogBuilderProps}></MyTextEditor>
    </div>
  )
}
