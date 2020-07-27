import { toJS } from "mobx"
import Autocomplete from "@material-ui/lab/Autocomplete"
import cx from "classnames"
import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"

import css from "./AutoComplete2.module.scss"

export default function AutoComplete2({ props }) {
  const [val, setVal] = useState({})

  const {
    items = [],
    getOptionLabel,
    className = "",
    onChange,
    label,
    defaultValue = { title: "select an option" },
  } = props

  const handleClick = () => {
    setVal(items[0]) //you pass any value from the array of top100Films
    // set value in TextField from dropdown list
  }

  const defaultGetOptionLabel = (option) => option.title
  const getLabel = getOptionLabel || defaultGetOptionLabel

  const _onChange = (event = null, value) => {
    console.log("value", value) // zzz
    onChange && onChange({ value })
  }

  return (
    <div className={cx(css.main, className)}>
      <Autocomplete
        options={items}
        getOptionLabel={getLabel}
        onChange={_onChange}
        id="auto-complete"
        autoComplete
        includeInputInList
        defaultValue={defaultValue}
        renderInput={(params) => {
          return <TextField {...params} label={label} variant="outlined" />
        }}
      />
    </div>
  )
}
