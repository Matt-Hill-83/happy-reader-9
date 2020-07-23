import React, { useEffect } from "react"
import { toJS } from "mobx"
import cx from "classnames"
import MUIDataTable from "mui-datatables"

import css from "./DataTable3.module.scss"
import DataTable3Config from "./DataTable3Config"

export default function DataTable3({ props }) {
  const [data, setData] = React.useState([])
  const [columns, setColumns] = React.useState([])
  const [options, setOptions] = React.useState(DataTable3Config.options || {})

  console.log("props", toJS(props)) // zzz
  useEffect(() => {
    console.log("useEffect - data") // zzz
    setData(props.data)
  }, [props.data])

  useEffect(() => {
    console.log("useEffect - columns") // zzz
    setColumns(props.columns)
  }, [props.columns])

  useEffect(() => {
    console.log("useEffect - options") // zzz
    setOptions(props.options)
  }, [props.options])

  const tableOptions = { ...options, ...props.options }
  const className = cx(css.main, props.className || "")
  console.log("DataTable3Config", DataTable3Config) // zzz
  console.log("tableOptions", tableOptions) // zzz

  return (
    <MUIDataTable
      className={className}
      data={data}
      columns={columns}
      options={tableOptions}
    />
  )
}
