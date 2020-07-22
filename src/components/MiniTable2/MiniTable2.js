import React, { Component } from "react"

import cx from "classnames"

import { observer } from "mobx-react"
import { toJS } from "mobx"
import _get from "lodash.get"
import css from "./MiniTable2.module.scss"
import images from "../../images/images"

// import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core"

class MiniTable2 extends Component {
  renderCell = ({ content }) => {
    if (this.props.renderCell) {
      return (
        <TableCell
          className={css.cellClass}
          // tooltip={value ? value.toString() : ""}
        >
          {this.props.renderCell({ content })}
        </TableCell>
      )
    }
    console.log("content", toJS(content)) // zzz
    const value = content
    let cellContent = null

    if (typeof value === "undefined") {
      // cellContent = "";
      cellContent = <span role="img">❌</span>
    } else if (value === true) {
      cellContent = <span role="img">✅</span>
    } else if (value === false) {
      cellContent = <span role="img">❌</span>
    } else {
      cellContent = value ? value.toString() : ""
    }

    return (
      <TableCell
        className={css.cellClass}
        tooltip={value ? value.toString() : ""}
      >
        {cellContent}
      </TableCell>
    )
  }

  render = () => {
    const { tableData, columnNames } = this.props

    return (
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {columnNames.map((header, index) => (
                <TableCell key={index}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((element, firstIndex) => {
              console.log("element", element) // zzz
              return (
                <TableRow key={firstIndex}>
                  {Object.keys(element).map((child, secondIndex) => {
                    console.log("child", toJS(child)) // zzz
                    return this.renderCell({ content: element[child] })
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default MiniTable2
