import React from "react"
// import PropTypes from "prop-types"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

class Cities extends React.Component {
  //   static propTypes = {
  //     value: PropTypes.string.isRequired,
  //     index: PropTypes.number.isRequired,
  //     change: PropTypes.func.isRequired,
  //   }

  render() {
    const { value, index, change, items } = this.props
    // const items = [
    //   "Aberdeen",
    //   "Abilene",
    //   "Akron",
    //   "Albany",
    //   "Albuquerque",
    //   "Alexandria",
    // ]

    return (
      <FormControl>
        <Select
          value={value}
          onChange={(event) => change(event.target.value, index)}
          style={{ fontSize: "inherit" }}
        >
          {items.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  }
}

export default Cities
