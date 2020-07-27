import React from "react"
import Cities from "./cities"
import Constants from "../../Utils/Constants/Constants"

const renderConditions = (value, tableMeta, updateValue) => {
  return value.map((condition) => {
    const keys = Object.keys(condition)
    return keys.map((key) => <div>{`${key}: ${condition[key]}`}</div>)
  })
}

const renderName = (value, tableMeta, updateValue) => {
  const items = Object.values(Constants.triggers.triggerTypes)
  return (
    <Cities
      items={items}
      value={value}
      index={tableMeta.columnIndex}
      change={(event) => updateValue(event)}
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
