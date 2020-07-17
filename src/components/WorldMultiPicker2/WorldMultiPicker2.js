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
import Utils from "../../Utils/Utils"

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

function getStyles(name, selectedItems, theme) {
  return {
    fontWeight:
      selectedItems.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

export default function WorldMultiPicker2({ props }) {
  const { bookId, onClose, maps } = props

  const classes = useStyles()
  const theme = useTheme()
  const [selectedItems, setSelectedItems] = React.useState([])

  function onClosePicker({ selectedItems = [] }) {
    onClose && onClose({ selectedItems })
  }

  const handleChange = (event) => {
    setSelectedItems(event.target.value)
  }

  const worlds = toJS(maps)
  const mutatedWorlds = worlds.docs.map((world) => {
    const { title } = world.data
    const worldId = world.id
    console.log("worldId", worldId) // zzz

    const belongsToABook = Utils.belongsToABook({ bookId, worldId })
    console.log("belongsToABook", toJS(belongsToABook)) // zzz

    if (belongsToABook) {
      world.data.newTitle = `xxx - ${title} - [${belongsToABook.toString()}]`
    } else {
      world.data.newTitle = title
    }
  })

  const sortedWorlds = Utils.sortDataByNestedKey({
    data: worlds.docs,
    keys: ["data", "newTitle"],
    order: "ASC",
  })

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
          onClose={() => onClosePicker({ selectedItems })}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => {
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
          {sortedWorlds.map((item) => {
            const { title, newTitle } = item.data
            return (
              <MenuItem
                key={title}
                value={item}
                style={getStyles(title, selectedItems, theme)}
              >
                {newTitle}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}
