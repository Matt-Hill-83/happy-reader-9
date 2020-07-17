import { makeStyles, useTheme } from "@material-ui/core/styles"
import { toJS } from "mobx"
import Chip from "@material-ui/core/Chip"

import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import React from "react"
import Select from "@material-ui/core/Select"
import cx from "classnames"

import css from "./WorldMultiPicker2.module.scss"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

// const worlds = [
//   { id: 5, name: "Oliver Hansen" },
//   { id: 5, name: "Van Henry" },
//   { id: 5, name: "April Tucker" },
//   { id: 5, name: "Ralph Hubbard" },
//   { id: 5, name: "Omar Alexander" },
//   { id: 5, name: "Carlos Abbott" },
//   { id: 5, name: "Miriam Wagner" },
//   { id: 5, name: "Bradley Wilkerson" },
//   { id: 5, name: "Virginia Andrews" },
//   { id: 5, name: "Kelly Snyder" },
// ]

function getStyles(name, selectedItems, theme) {
  return {
    fontWeight:
      selectedItems.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

export default function WorldMultiPicker2({ props }) {
  console.log("props", props) // zzz
  console.log("props.maps", toJS(props.maps)) // zzz
  console.log("props.maps[0].data", toJS(props.maps[0])) // zzz
  const classes = useStyles()
  const theme = useTheme()
  const [selectedItems, setSelectedItems] = React.useState([])

  console.log("selectedItems", toJS(selectedItems)) // zzz

  function onClose({ selectedItems = [] }) {
    console.log("onClose") // zzz
    console.log("selectedItems", toJS(selectedItems)) // zzz
    const worldIds = selectedItems.map((item) => {
      console.log("item", toJS(item)) // zzz
      return item.id
    })
    console.log("worldIds", toJS(worldIds)) // zzz
  }

  const handleChange = (event) => {
    setSelectedItems(event.target.value)
  }

  const worlds = props.maps
  console.log("worlds", toJS(worlds)) // zzz

  // TODO: pass selected object id's to update function to update book object chapters prop
  // TODO: pass selected object id's to update function to update book object chapters prop
  // TODO: pass selected object id's to update function to update book object chapters prop
  // TODO: pass selected object id's to update function to update book object chapters prop
  // TODO: pass selected object id's to update function to update book object chapters prop
  // TODO: pass selected object id's to update function to update book object chapters prop
  return (
    <div>
      <FormControl className={cx(classes.formControl, css.main)}>
        {/* <FormControl className={classes.formControl}> */}
        <InputLabel id="demo-mutiple-chip-label">Quests</InputLabel>
        <Select
          className={cx(classes.formControl, css.main2)}
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={selectedItems}
          onChange={handleChange}
          onClose={() => onClose({ selectedItems })}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => {
            console.log("selected", selected) // zzz
            return (
              <div className={classes.chips}>
                {selected.map((item) => {
                  const { title } = item.data
                  return (
                    <Chip key={title} label={title} className={classes.chip} />
                  )
                })}
              </div>
            )
          }}
          MenuProps={MenuProps}
        >
          {worlds.docs.map((item) => {
            console.log("item", toJS(item)) // zzz
            const { title } = item.data
            return (
              <MenuItem
                key={title}
                value={item}
                style={getStyles(title, selectedItems, theme)}
              >
                {title}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}
