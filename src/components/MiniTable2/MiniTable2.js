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
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const headers = ["one", "two", "three", "four", "five", "six", "seven"];
const data = [
  {
    dataOne: 1,
    dataTwo: 2,
    dataThree: 3,
    dataFour: 4,
    dataFive: 5,
    dataSix: 6,
    dataSeven: 7,
  },
  {
    dataOne: 1,
    dataTwo: 2,
    dataThree: 3,
    dataFour: 4,
    dataFive: 5,
    dataSix: 6,
    dataSeven: 7,
  },
  {
    dataOne: 1,
    dataTwo: 2,
    dataThree: 3,
    dataFour: 4,
    dataFive: 5,
    dataSix: 6,
    dataSeven: 7,
  },
  {
    dataOne: 1,
    dataTwo: 2,
    dataThree: 3,
    dataFour: 4,
    dataFive: 5,
    dataSix: 6,
    dataSeven: 7,
  },
];

// function DenseTable() {
class DenseTable extends Component {
  // export def ault function DenseTable() {
  // classes = useStyles();

  render = () => {
    return (
      <TableContainer component={Paper}>
        <Table
          // className={this.classes.table}
          size="small"
          aria-label="a dense table"
        >
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
            {data.map((element, firstIndex) => (
              <TableRow key={firstIndex}>
                {Object.keys(element).map((child, secondIndex) => (
                  <TableCell key={secondIndex}>{element[child]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
}

export default DenseTable;
