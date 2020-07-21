import React, { useEffect, useState } from "react"
import JSONEditor from "jsoneditor"

import "jsoneditor/dist/jsoneditor.css"
import "./JsonEditor2.module.css"

export default function JsonEditor2({ props }) {
  let container
  let jsoneditor

  console.log("props", props) // zzz
  console.log("jsoneditor", jsoneditor) // zzz

  const options = {
    mode: "tree",
    onChangeJSON: props && props.onChangeJSON,
  }
  // const { json } = props
  // const [json, setJson] = React.useState([])

  useEffect(() => {
    console.log("useEffect------------mounting-------------------->>>") // zzz
    // on mount
    console.log("options", options) // zzz
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
    <div
      className="jsoneditor-react-container"
      ref={(elem) => (container = elem)}
    />
  )
}
