import React from "react"

export const subQuestTableConfig = {
  columns: [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
      },
    },
    {
      name: "conditions",
      label: "Conditions",
      options: {
        filter: true,
        filterType: "multiselect",
        customBodyRender: (value, tableMeta, updateValue) => {
          console.log("updateValue", updateValue) // zzz
          console.log("tableMeta", tableMeta) // zzz
          return value.map((condition) => {
            const keys = Object.keys(condition)
            return keys.map((key) => <div>{`${key}: ${condition[key]}`}</div>)
          })
        },
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
  options: {
    filter: true,
    filterType: "dropdown",
    responsive: "vertical",
    enableNestedDataAccess: ".",
    customToolbar: null,
    filter: false,
    search: false,
    print: false,
    download: false,
    viewColumns: false,
    customToolbar: null,
    responsive: "vertical",
  },
}
