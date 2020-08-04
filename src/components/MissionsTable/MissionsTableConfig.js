import { Button, ButtonGroup, Popover, Classes } from "@blueprintjs/core"
import { IconNames } from "@blueprintjs/icons"
import { toJS } from "mobx"
import cx from "classnames"
import React from "react"
import TextField from "@material-ui/core/TextField"
import _get from "lodash.get"

import Utils from "../../Utils/Utils"
import SimpleSelectObj from "../SimpleSelectObj/SimpleSelectObj"
import AddDeleteButtonGroup from "../AddDeleteButtonGroup/AddDeleteButtonGroup"

import css from "./MissionsTableConfig.module.scss"
import AutoComplete2 from "../AutoComplete2/AutoComplete2"

export const getTableConfig = ({
  tableChangeCallback = () => {},
  onDeleteTriggerRow,
  onAddItem,
  saveConfig,
  scenes,
  itemsToGet,
}) => {
  const renderItem = (value, tableMeta, updateValue) => {
    const onChange = (newValue) => {
      console.log("newValue", toJS(newValue)) // zzz
      const { rowIndex, columnIndex } = tableMeta
      updateValue(newValue)
      tableMeta.tableData[rowIndex][columnIndex] = { ...newValue }
      tableChangeCallback({ tableMeta, newValue, propertyName: "item" })
    }

    console.log("value", toJS(value)) // zzz
    console.log("value.name", toJS(value.name)) // zzz
    console.log("itemsToGet", toJS(itemsToGet)) // zzz
    const itemToGet = itemsToGet.find((item) => item.name === value.name)
    console.log("itemToGet", toJS(itemToGet)) // zzz

    console.log("itemToGet", toJS(itemToGet)) // zzz
    const props = {
      sortKeys: ["name"],
      // className: css.sceneDropdown,
      items: itemsToGet,
      defaultValue: itemToGet,
      getOptionLabel: (option) => option.name,
      onChange: onChange,
    }

    return <AutoComplete2 props={props} />
  }

  const renderName = (value, tableMeta, updateValue) => {
    const onChange = (newValue) => {
      updateValue(newValue)
      tableChangeCallback({
        tableMeta,
        newValue: newValue.value,
        propertyName: "name",
      })
      saveConfig()
    }

    return (
      <TextField
        className={css.inputField}
        id="outlined-secondary"
        variant="outlined"
        margin="dense"
        color="secondary"
        defaultValue={value}
        onBlur={(event) => onChange({ value: event.target.value })}
        InputProps={{}}
      />
    )
  }

  const renderRecipient = (value, tableMeta, updateValue) => {
    const onChange = (newValue) => {
      const transformedValue = {
        name: newValue.location.name,
        id: newValue.id,
      }

      updateValue(newValue)
      tableChangeCallback({
        tableMeta,
        newValue: transformedValue,
        propertyName: "recipient",
      })
      saveConfig()
    }

    const scene = scenes.find((scene) => scene.id === value.id)
    //   (scene) =>
    //     scene.location.name === _get(value, "location.name") ||
    //     scene.location.name === value.name
    // )

    return (
      <SimpleSelectObj
        // className={css.sceneDropdown}
        items={scenes}
        value={scene}
        getOptionLabel={(option) => {
          return _get(option, "location.name") || "error!!!"
        }}
        onChange={onChange}
      />
    )
  }

  const columnNames = [
    "Mission",
    "Bring the...",
    "to the...",
    "Gold",
    "Complete",
  ]

  const tableConfig = {
    options: {
      selectableRows: "none",
      onCellClick: () => {},
      onRowClick: () => {},
    },
    columns: [
      {
        name: "none",
        label: " ",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => (
            <AddDeleteButtonGroup
              props={{
                rowIndex: tableMeta.rowIndex,
                onDelete: onDeleteTriggerRow,
                onAdd: onAddItem,
              }}
            />
          ),
        },
      },
      {
        name: "name",
        label: "Mission",
        options: {
          sort: false,
          filter: true,
          customBodyRender: renderName,
        },
      },
      {
        name: "item",
        label: "Bring the...",
        options: {
          sort: false,
          filter: true,
          customBodyRender: renderItem,
        },
      },
      {
        name: "recipient",
        label: "to the...",
        options: {
          sort: false,
          filter: true,
          // customBodyRender: renderItem,
          customBodyRender: renderRecipient,
        },
      },
    ],
  }

  return tableConfig
}
