import React from "react"
import { Editor } from "@tinymce/tinymce-react"

export default function MyTextEditor({ props }) {
  console.log("props", props) // zzz
  const { initialValue = "" } = props

  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content)
  }

  return (
    <Editor
      apiKey="2d0u7t6q8ximue5owrnarok24dxh778nce7b4rm6m58qckqj"
      initialValue={initialValue}
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
    />
  )
}
