import { Button } from "@blueprintjs/core"
import { IconNames } from "@blueprintjs/icons"
import { toJS } from "mobx"
import Constants from "../../Utils/Constants/Constants"
import React from "react"
import SimpleSelectObj from "../SimpleSelectObj/SimpleSelectObj"
import TextField from "@material-ui/core/TextField"

import css from "./SubQuestTableConfig.module.scss"

const newCondition = { completedScene: "000" }

export const getSubQuestTableConfigFunc = ({
  tableChangeCallback,
  onDeleteTriggerRow,
  onAddTriggerRow,
  saveConfig,
}) => {
  const renderConditions = (value, tableMeta, updateValue) => {
    const conditions = value
    return conditions.map((condition, conditionIndex) => {
      // console.log("condition", toJS(condition)) // zzz
      const conditionNames = Object.keys(condition)

      return conditionNames.map((conditionName) => {
        const items = Object.values(Constants.triggers.baseConditions)
        const conditionValue = condition[conditionName]

        const onChangeCondition = (newValue) => {
          conditions[conditionIndex] = { [newValue]: conditionValue }
          updateValue(conditions)
          saveConfig()
        }

        const onChangeValue = ({ value = 0 }) => {
          conditions[conditionIndex][conditionName] = value
          updateValue(conditions)
          saveConfig()
        }

        return (
          <div className={css.conditionsKVPair}>
            <SimpleSelectObj
              className={css.triggerConditionsDropdown}
              items={items}
              value={conditionName}
              index={tableMeta.columnIndex}
              onChange={onChangeCondition}
              getOptionLabel={(option) => option}
            />
            <TextField
              className={css.inputField}
              id="outlined-secondary"
              variant="outlined"
              margin="dense"
              color="secondary"
              defaultValue={conditionValue}
              onBlur={(event) => onChangeValue({ value: event.target.value })}
              // onChange={(event) => onChangeValue({ value: event.target.value })}
              InputProps={{}}
            />
            {renderAddDeleteButtonsForTriggerConditions({
              tableMeta,
              conditionIndex,
            })}
          </div>
        )
      })
    })
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
      <SimpleSelectObj
        className={css.triggerTypesDropdown}
        items={triggerTypes}
        value={value}
        getOptionLabel={(option) => option}
        onChange={onChange}
      />
    )
  }

  const onAddTriggerCondition = ({ tableMeta, conditionIndex, conditions }) => {
    return
  }

  const onDeleteTriggerCondition = ({
    tableMeta,
    conditionIndex,
    conditions,
  }) => {
    return
  }

  const renderAddDeleteButtonsForTriggerConditions = ({
    tableMeta,
    conditionIndex,
  }) => {
    return (
      <>
        <Button
          onClick={() =>
            onAddTriggerCondition({
              rowIndex: tableMeta.rowIndex,
              before: true,
            })
          }
          icon={IconNames.ADD}
        />
        <Button
          onClick={() =>
            onDeleteTriggerCondition({ rowIndex: tableMeta.rowIndex })
          }
          icon={IconNames.TRASH}
        />
        <Button
          onClick={() =>
            onAddTriggerCondition({
              rowIndex: tableMeta.rowIndex,
              before: false,
            })
          }
          icon={IconNames.ADD}
        />
      </>
    )
  }

  const renderAddDeleteButtonsForTriggers = ({ tableMeta }) => {
    return (
      <>
        <Button
          onClick={() =>
            onAddTriggerRow({ rowIndex: tableMeta.rowIndex, before: true })
          }
          icon={IconNames.ADD}
        />
        <Button
          onClick={() => onDeleteTriggerRow({ rowIndex: tableMeta.rowIndex })}
          icon={IconNames.TRASH}
        />
        <Button
          onClick={() =>
            onAddTriggerRow({ rowIndex: tableMeta.rowIndex, before: false })
          }
          icon={IconNames.ADD}
        />
      </>
    )
  }

  const subQuestTableConfig2 = {
    options: {
      selectableRows: "none",
      onCellClick: () => {},
      onRowClick: () => {},
    },
    columns: [
      {
        name: "none",
        label: "Actions",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) =>
            renderAddDeleteButtonsForTriggers({
              tableMeta,
            }),
        },
      },
      {
        name: "name",
        label: "Trigger Type",
        options: {
          sort: false,
          filter: true,
          customBodyRender: renderName,
        },
      },
      {
        name: "conditions",
        label: "Trigger Conditions",
        options: {
          sort: false,
          filter: true,
          customBodyRender: renderConditions,
        },
      },
    ],
  }

  return subQuestTableConfig2
}
