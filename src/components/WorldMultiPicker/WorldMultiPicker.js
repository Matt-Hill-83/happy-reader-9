import React, { Component } from "react"
import { observer } from "mobx-react"
import { toJS } from "mobx"

import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import ListItemText from "@material-ui/core/ListItemText"
import Select from "@material-ui/core/Select"
import Checkbox from "@material-ui/core/Checkbox"
import Chip from "@material-ui/core/Chip"

class WorldMultiPicker extends Component {
  state = {
    personName: [],
  }

  // const ITEM_HEIGHT = 48
  // const ITEM_PADDING_TOP = 8
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
  //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //       width: 250,
  //     },
  //   },
  // }

  names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ]

  classes = {}
  //  [personName, setPersonName] = React.useState([])
  //  [personName, setPersonName] = React.useState([])

  handleChange = (event) => {
    // setPersonName(event.target.value)
    this.setState({ personName: [event.target.value] })
  }

  render = () => {
    const { personName } = this.state
    return (
      <div>
        <FormControl className={this.classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={personName}
            onChange={this.handleChange}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            // MenuProps={MenuProps}
          >
            {this.names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    )
  }
}

export default observer(WorldMultiPicker)
