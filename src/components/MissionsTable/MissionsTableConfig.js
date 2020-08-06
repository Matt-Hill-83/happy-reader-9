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
import localStateStore from "../../Stores/LocalStateStore/LocalStateStore"
import QuestStatusUtils from "../../Utils/QuestStatusUtils"

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
      const { rowIndex, columnIndex } = tableMeta
      updateValue(newValue)
      tableMeta.tableData[rowIndex][columnIndex] = { ...newValue }
      tableChangeCallback({ tableMeta, newValue, propertyName: "item" })
    }

    const itemToGet = itemsToGet.find((item) => item.name === value.name)

    const world = localStateStore.getWorldBuilderWorld()
    const getOptionLabel = (option) => {
      const sceneId = option.sceneId

      let sceneName = ""
      const scene = scenes.find((scene) => {
        return scene.id === option.sceneId
      })

      if (scene && scene.id) {
        sceneName = ` [${scene.location.name}]`
      }

      return `${option.name}${sceneName}`
    }

    const props = {
      sortKeys: ["name"],
      // className: css.sceneDropdown,
      items: itemsToGet,
      defaultValue: itemToGet,
      getOptionLabel,
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
      updateValue(newValue)
      tableChangeCallback({
        tableMeta,
        newValue: newValue,
        propertyName: "recipient",
      })
      saveConfig()
    }

    const allItems = Utils.getAllItemsInScenes({ scenes })
    const allScenes = Utils.getSimpleSceneObjects({ scenes })
    const combinedItems = [...allItems, ...allScenes]

    const transformedData = scenes.map((scene) => {
      return { name: scene.location.name, id: scene.id }
    })

    const scene = transformedData.find((scene) => scene.id === value.id)

    return (
      <SimpleSelectObj
        // className={css.sceneDropdown}
        items={combinedItems}
        // items={transformedData}
        value={scene}
        getOptionLabel={(option) => {
          return _get(option, "name") || "error!!!"
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
          customBodyRender: renderRecipient,
        },
      },
    ],
  }

  return tableConfig
}
