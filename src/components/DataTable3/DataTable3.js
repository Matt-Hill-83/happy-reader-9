import React, { useEffect } from "react"
import { toJS } from "mobx"
import cx from "classnames"
import MUIDataTable from "mui-datatables"

import css from "./DataTable3.module.scss"
import DataTable3Config from "./DataTable3Config"

export default function DataTable3({ props }) {
  const [data, setData] = React.useState([])
  const [columns, setColumns] = React.useState([])
  const defaultOptions = DataTable3Config.options || {}
  // const [options, setOptions] = React.useState(DataTable3Config.options || {})

  useEffect(() => {
    setData(props.data)
  }, [props.data])

  useEffect(() => {
    setColumns(props.columns)
  }, [props.columns])

  // useEffect(() => {
  //   setOptions(props.options)
  // }, [props.options])

  const tableOptions = { ...defaultOptions, ...props.options }
  // const tableOptions = { ...options, ...props.options }
  const className = cx(css.main, props.className || "")

  return (
    <MUIDataTable
      className={className}
      data={data}
      columns={columns}
      options={tableOptions}
    />
  )
}
