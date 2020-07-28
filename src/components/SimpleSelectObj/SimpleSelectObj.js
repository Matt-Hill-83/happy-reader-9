import React from "react"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

export default class SimpleSelectObj extends React.Component {
  render() {
    const { value, onChange, items, getOptionLabel, className } = this.props

    const _onChange = (event) => {
      onChange(event.target.value)
    }

    return (
      <FormControl>
        <Select
          className={className}
          value={value}
          onChange={_onChange}
          style={{ fontSize: "inherit" }}
        >
          {items.map((item, index) => {
            const label = getOptionLabel(item)
            return (
              <MenuItem key={index} value={item}>
                {label}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    )
  }
}
