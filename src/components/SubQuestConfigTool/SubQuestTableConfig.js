import React from "react"
import Cities from "./cities"
import Constants from "../../Utils/Constants/Constants"
import { toJS } from "mobx"

const renderConditions = (value, tableMeta, updateValue) => {
  const conditions = value
  console.log("conditions", toJS(conditions)) // zzz
  return conditions.map((condition, conditionIndex) => {
    const conditionNames = Object.keys(condition)

    return conditionNames.map((conditionName) => {
      const items = Object.values(Constants.triggers.baseConditions)

      const conditionValue = condition[conditionName]

      const onChange = (newValue) => {
        console.log("newValue", newValue) // zzz
        conditions[conditionIndex] = { [newValue]: conditionValue }
        updateValue(conditions)
      }

      return (
        <div>
          <Cities
            items={items}
            value={conditionName}
            index={tableMeta.columnIndex}
            change={onChange}
          />
          <div>{` : ${conditionValue}`}</div>
        </div>
      )
    })
  })
}

const renderName = (value, tableMeta, updateValue) => {
  const items = Object.values(Constants.triggers.triggerTypes)
  return (
    <Cities
      items={items}
      value={value}
      index={tableMeta.columnIndex}
      change={(newValue) => {
        console.log("newValue", newValue) // zzz
        updateValue(newValue)
      }}
    />
  )
}

export const subQuestTableConfig = {
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
        // filterType: "multiselect",
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
            <button
              onClick={() => {
                const { data } = this.state
                data.shift()
                this.setState({ data })
              }}
            >
              Delete
            </button>
          )
        },
      },
    },
    {
      name: "Edit",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <button
              onClick={() =>
                window.alert(
                  `Clicked "Edit" for row ${rowIndex} with dataIndex of ${dataIndex}`
                )
              }
            >
              Edit
            </button>
          )
        },
      },
    },
    {
      name: "Add",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <button
            // onClick={() => {
            //   const { data } = this.state
            //   data.unshift([
            //     "Mason Ray",
            //     "Computer Scientist",
            //     "San Francisco",
            //     39,
            //     "$142,000",
            //   ])
            //   this.setState({ data })
            // }}
            >
              Add
            </button>
          )
        },
      },
    },
  ],
}
