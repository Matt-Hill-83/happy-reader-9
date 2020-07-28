import React from "react"
import Constants from "../../Utils/Constants/Constants"
import { toJS } from "mobx"
import TextField from "@material-ui/core/TextField"
import { IconNames } from "@blueprintjs/icons"
import SimpleSelectObj from "../SimpleSelectObj/SimpleSelectObj"
import { Button } from "@blueprintjs/core"

import css from "./SubQuestTableConfig.module.scss"

export const getSubQuestTableConfigFunc = ({ tableChangeCallback }) => {
  const renderConditions = (value, tableMeta, updateValue) => {
    const conditions = value
    return conditions.map((condition, conditionIndex) => {
      const conditionNames = Object.keys(condition)

      return conditionNames.map((conditionName) => {
        const items = Object.values(Constants.triggers.baseConditions)
        const conditionValue = condition[conditionName]

        const onChangeCondition = (newValue) => {
          conditions[conditionIndex] = { [newValue]: conditionValue }
          updateValue(conditions)
        }

        const onChangeValue = ({ value = 0 }) => {
          conditions[conditionIndex][conditionName] = value
          updateValue(conditions)
        }

        return (
          <div className={css.conditionsKVPair}>
            <SimpleSelectObj
              className={css.dropdown}
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
              onChange={(event) => onChangeValue({ value: event.target.value })}
              InputProps={{}}
            />
          </div>
        )
      })
    })
  }

  const renderName = (value, tableMeta, updateValue) => {
    const triggerTypes = Object.values(Constants.triggers.triggerTypes)
    const onChange = (newValue) => {
      updateValue(newValue)
      tableMeta.tableData[0][0] = newValue
      tableChangeCallback({ tableMeta, newValue, propertyName: "name" })
    }

    return (
      <SimpleSelectObj
        items={triggerTypes}
        value={value}
        getOptionLabel={(option) => option}
        onChange={onChange}
      />
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
        name: "name",
        label: "Name",
        options: {
          filter: true,
          customBodyRender: renderName,
        },
      },
      {
        name: "conditions",
        label: "Conditions",
        options: {
          filter: true,
          customBodyRender: renderConditions,
        },
      },
      {
        name: "Delete",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRenderLite: (dataIndex) => {
            return (
              <Button
                onClick={() => {
                  const { data } = this.state
                  data.shift()
                  this.setState({ data })
                }}
                icon={IconNames.TRASH}
              />
            )
          },
        },
      },
      // {
      //   name: "Edit",
      //   options: {
      //     filter: false,
      //     sort: false,
      //     empty: true,
      //     customBodyRenderLite: (dataIndex, rowIndex) => {
      //       return (
      //         <button
      //           onClick={() =>
      //             window.alert(
      //               `Clicked "Edit" for row ${rowIndex} with dataIndex of ${dataIndex}`
      //             )
      //           }
      //         >
      //           Edit
      //         </button>
      //       )
      //     },
      //   },
      // },
      // {
      //   name: "Add",
      //   options: {
      //     filter: false,
      //     sort: false,
      //     empty: true,
      //     customBodyRenderLite: (dataIndex) => {
      //       return (
      //         <button
      //         // onClick={() => {
      //         //   const { data } = this.state
      //         //   data.unshift([
      //         //     "Mason Ray",
      //         //     "Computer Scientist",
      //         //     "San Francisco",
      //         //     39,
      //         //     "$142,000",
      //         //   ])
      //         //   this.setState({ data })
      //         // }}
      //         >
      //           Add
      //         </button>
      //       )
      //     },
      //   },
      // },
    ],
  }

  return subQuestTableConfig2
}
