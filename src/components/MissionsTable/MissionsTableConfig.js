import { Button, ButtonGroup, Popover, Classes } from "@blueprintjs/core"
import { IconNames } from "@blueprintjs/icons"
import { toJS } from "mobx"
import cx from "classnames"
import React from "react"
import TextField from "@material-ui/core/TextField"

import Utils from "../../Utils/Utils"
import SimpleSelectObj from "../SimpleSelectObj/SimpleSelectObj"
import Constants from "../../Utils/Constants/Constants"
import AddDeleteButtonGroup from "../AddDeleteButtonGroup/AddDeleteButtonGroup"

import css from "./MissionsTableConfig.module.scss"

const newCondition = { completedScene: "1234567" }

export const getTableConfig = ({
  tableChangeCallback = () => {},
  onDeleteTriggerRow,
  onAddItem,
  saveConfig,
  scenes,
  itemsToGet,
}) => {
  const renderItem = (value, tableMeta, updateValue) => {
    console.log("value", toJS(value)) // zzz
    const onChange = (newValue) => {
      const { rowIndex, columnIndex } = tableMeta
      updateValue(newValue)
      // tableMeta.tableData[rowIndex][columnIndex] = newValue
      // tableChangeCallback({ tableMeta, newValue, propertyName: "name" })
    }

    const realScenes = itemsToGet || []
    console.log("realScenes", toJS(realScenes)) // zzz
    const realScene = realScenes.find((scene) => scene.id === value.id)

    return (
      <SimpleSelectObj
        className={css.sceneDropdown}
        items={realScenes}
        value={realScene}
        getOptionLabel={(option) => option.name}
        onChange={onChange}
      />
    )
  }

  const renderRecipient = (value, tableMeta, updateValue) => {
    console.log("value", toJS(value)) // zzz
    const onChange = (newValue) => {
      const { rowIndex, columnIndex } = tableMeta
      updateValue(newValue)
      // tableMeta.tableData[rowIndex][columnIndex] = newValue
      // tableChangeCallback({ tableMeta, newValue, propertyName: "name" })
    }

    const realScenes = scenes || []
    console.log("realScenes", toJS(realScenes)) // zzz
    const realScene = realScenes.find((scene) => scene.id === value.id)

    return (
      <SimpleSelectObj
        className={css.sceneDropdown}
        items={realScenes}
        value={realScene}
        getOptionLabel={(option) => option.name}
        onChange={onChange}
      />
    )
  }

  const renderName = (value, tableMeta, updateValue) => {
    const triggerTypes = Object.values(Constants.triggers.triggerTypes)
    const onChange = (newValue) => {
      const { rowIndex, columnIndex } = tableMeta
      updateValue(newValue)
      tableMeta.tableData[rowIndex][columnIndex] = newValue
      tableChangeCallback({ tableMeta, newValue, propertyName: "name" })
    }

    return (
      <div className={css.nameElements}>
        <SimpleSelectObj
          className={css.triggerTypesDropdown}
          items={triggerTypes}
          value={value}
          getOptionLabel={(option) => option}
          onChange={onChange}
        />
        {/* <span className={css.spacerText1}>scene when</span> */}
      </div>
    )
  }

  const onAddTriggerCondition = ({ conditionIndex, conditions, before }) => {
    Utils.addArrayElement({
      newElement: newCondition,
      before,
      index: conditionIndex,
      array: conditions,
    })
    saveConfig()
  }

  const onDeleteTriggerCondition = ({ rowIndex, conditions }) => {
    Utils.deleteArrayElement({ index: rowIndex, array: conditions })
    saveConfig()
  }

  const renderAddDeleteButtonsForTriggerConditions = ({
    conditionIndex,
    conditions,
  }) => {
    return (
      <>
        <Button
          onClick={() =>
            onAddTriggerCondition({
              conditionIndex,
              conditions,
              before: true,
            })
          }
          icon={IconNames.ADD}
        />
        <Button
          onClick={() =>
            onDeleteTriggerCondition({ rowIndex: conditionIndex, conditions })
          }
          icon={IconNames.TRASH}
        />
        <Button
          onClick={() =>
            onAddTriggerCondition({
              conditionIndex,
              conditions,
              before: false,
            })
          }
          icon={IconNames.ADD}
        />
      </>
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
          // customBodyRender: renderName,
        },
      },
      {
        name: "item.name",
        label: "Bring the...",
        options: {
          sort: false,
          filter: true,
          customBodyRender: renderItem,
        },
      },
      {
        name: "item.name",
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
