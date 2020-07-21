import React, { useEffect, useState } from "react"
import JSONEditor, { cssText } from "jsoneditor"
import cx from "classnames"
import "jsoneditor/dist/jsoneditor.css"
// import "./JsonEditor2.module.css"
import css from "./JsonEditor2.module.scss"

export default function JsonEditor2({ props }) {
  let container
  let jsoneditor

  console.log("props", props) // zzz
  console.log("jsoneditor", jsoneditor) // zzz

  // const { json } = props
  // const [json, setJson] = React.useState([])

  useEffect(() => {
    const options = {
      mode: "tree",
      onChangeJSON: props && props.onChangeJSON,
    }
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
      // className="jsoneditor-react-container"
      className={cx("jsoneditor-react-container", css.main)}
      ref={(elem) => (container = elem)}
    />
  )
}
