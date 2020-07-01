import React, { Component, useState } from "react";
// import { TruncatedFormat, Cell, Column, Table } from "@blueprintjs/table";

import cx from "classnames";

import { observer } from "mobx-react";
import { toJS } from "mobx";
import _get from "lodash.get";
import css from "./MiniTable2.module.scss";
import images from "../../images/images";

// import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

// function DenseTable() {
export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// class MiniTable2 extends Component {
//   state = {};

//   renderCell = (row, col) => {
//     const { tableData } = this.props;
//     const value = tableData[row][col];

//     let cellContent = null;

//     if (typeof value === "undefined") {
//       cellContent = "";
//     } else if (value === true) {
//       cellContent = <span role="img">✅</span>;
//     } else if (value === false) {
//       cellContent = <span role="img">❌</span>;
//     } else {
//       cellContent = (
//         <TruncatedFormat>{value ? value.toString() : ""}</TruncatedFormat>
//       );
//     }

//     return (
//       <Cell className={css.cellClass} tooltip={value ? value.toString() : ""}>
//         {cellContent}
//       </Cell>
//     );
//   };

//   render = () => {
//     const { columnNames, tableData, tableProps = {} } = this.props;

//     const columns = columnNames.map((name, index) => {
//       return <Column key={index} cellRenderer={this.renderCell} name={name} />;
//     });

//     const numRows = tableData.length;

//     return (
//       <div className={css.main}>
//         <Table
//           minColumnWidth={5}
//           numRows={numRows}
//           enableRowHeader={false}
//           {...tableProps}
//         >
//           {columns}
//         </Table>
//       </div>
//     );
//   };
// }

// export default observer(DenseTable);
