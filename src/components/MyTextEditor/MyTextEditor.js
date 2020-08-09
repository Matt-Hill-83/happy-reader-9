import React, { useState, useEffect } from "react"
import { Editor } from "@tinymce/tinymce-react"
import { toJS } from "mobx"
import { TextareaAutosize } from "@material-ui/core"
import cx from "classnames"

import css from "./MyTextEditor.module.scss"

export default function MyTextEditor({ props }) {
  const { onChange, className = "" } = props
  const [content, setContent] = useState("")

  useEffect(() => {
    // on mount
    setContent(props.content)
    // returned function will be called on component unmount
    return () => {}
  }, [])

  // on change in props
  useEffect(() => {
    console.log("props change==========================>>>") // zzz
    setContent(props.content)
  }, [props.content])

  console.log("props", props) // zzz

  const handleEditorChange = (content, editor) => {
    // console.log("Content was updated:", content)
    // console.log("editor", toJS(editor)) // zzz
  }
  const onTextAreaChange = (newContent) => {
    setContent(newContent)
    console.log("text area:", newContent)
  }

  console.log("className", toJS(className)) // zzz
  return (
    <>
      <TextareaAutosize
        className={cx(css.main, className)}
        onChange={onTextAreaChange}
        value={content}
      >
        {content}
      </TextareaAutosize>
      {/* <Editor
        apiKey="2d0u7t6q8ximue5owrnarok24dxh778nce7b4rm6m58qckqj"
        // content={initialValue}
        value={initialValue}
        // initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | help",
        }}
        onEditorChange={handleEditorChange}
      /> */}
    </>
  )
}
