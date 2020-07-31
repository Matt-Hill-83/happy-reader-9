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

  const { onSave, scene } = props

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
  const frames = _get(scene, "frameSet.frames") || []

  frames.forEach((frame) => {
    frame.dialog.forEach((dialog) => {
      content += `<p>${dialog.text || "empty"}</p>`
    })

    console.log("content", toJS(content)) // zzz
  })

  const dialogBuilderProps = { initialValue: content }
  // const dialogBuilderProps = { initialValue: scene.location.name }

  return <MyTextEditor props={dialogBuilderProps}></MyTextEditor>
}
