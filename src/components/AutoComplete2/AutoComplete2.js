import { toJS } from "mobx"
import Autocomplete from "@material-ui/lab/Autocomplete"
import cx from "classnames"
import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import Utils from "../../Utils/Utils"

import css from "./AutoComplete2.module.scss"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core"
import getMuiTheme from "material-ui/styles/getMuiTheme"

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

  const defaultGetOptionLabel = (option) => option.title || "----"
  const getLabel = getOptionLabel
    ? (option) => getOptionLabel(option) || "---"
    : defaultGetOptionLabel

  const _onChange = (event = null, value) => {
    onChange && onChange(value)
  }

  let sortedData
  if (sortKeys && sortKeys.length > 0) {
    sortedData = Utils.sortDataByNestedKey({
      data: items,
      keys: sortKeys,
      order: "ASC",
    })
  } else {
    sortedData = items
  }

  const defaultGetMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiAutocomplete: {
          popper: {
            backgroundColor: "#FF0000",
            width: "1000px !important",
            border: "4px solid red !important",
          },
        },
      },
    })

  const theme = defaultGetMuiTheme()

  const listboxProps = { className: css.test }
  return (
    <div className={cx(css.main, className)}>
      <MuiThemeProvider theme={theme}>
        <Autocomplete
          ListboxProps={listboxProps}
          disableListWrap={true}
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
      </MuiThemeProvider>
    </div>
  )
}
