import React, { useEffect } from "react"
import { toJS } from "mobx"
import cx from "classnames"
import MUIDataTable from "mui-datatables"

import DataTable3Config from "./DataTable3Config"

import css from "./DataTable3.module.scss"

export default function DataTable3({ props }) {
  const { data, columns, options } = props

  const defaultOptions = DataTable3Config.options || {}
  const tableOptions = { ...defaultOptions, ...options }
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
