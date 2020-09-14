import React from "react"
import AutoComplete2 from "../AutoComplete2/AutoComplete2"
import { toJS } from "mobx"

export default function SimpleSelectObj(props) {
  console.log("props", toJS(props)) // zzz
  const { value } = props
  return <AutoComplete2 {...props} defaultValue={value} />
}
