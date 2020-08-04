import { toJS } from "mobx"
import Autocomplete from "@material-ui/lab/Autocomplete"
import cx from "classnames"
import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"

import css from "./AutoComplete2.module.scss"
import Utils from "../../Utils/Utils"

export default function AutoComplete2({ props }) {
  const {
    className = "",
    defaultValue = { title: "select an option" },
    getOptionLabel,
    items = [],
    label,
    onChange,
    sortKeys = ["name"],
  } = props

  const defaultGetOptionLabel = (option) => option.title
  const getLabel = getOptionLabel || defaultGetOptionLabel

  const _onChange = (event = null, value) => {
    onChange && onChange(value)
  }

  console.log("sortKeys", toJS(sortKeys)) // zzz
  let sortedData
  if (sortKeys && sortKeys.length > 0) {
    console.log("sortKeys", toJS(sortKeys)) // zzz
    sortedData = Utils.sortDataByNestedKey({
      data: items,
      keys: sortKeys,
      order: "ASC",
    })
  } else {
    sortedData = items
  }

  return (
    <div className={cx(css.main, className)}>
      <Autocomplete
        options={sortedData}
        clearOnEscape={true}
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
