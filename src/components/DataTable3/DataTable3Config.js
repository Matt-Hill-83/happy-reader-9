import React from "react"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import css from "./DataTable3.module.scss"

export default {
  options: {
    setCellHeaderProps: (value) => {
      return {
        style: {
          textDecoration: "underline",
        },
      }
    },
    setCellProps: (value) => {
      return {
        className: css.test,
        style: {
          borderRight: "2px solid blue",
          display: "none",
        },
      }
    },
    setTableProps: () => {
      return {
        padding: "none",

        // material ui v4 only
        size: "small",
      }
    },
    pagination: false,
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
