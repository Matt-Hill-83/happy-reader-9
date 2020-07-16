/* eslint-disable no-use-before-define */
import React from "react"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import cx from "classnames"
import css from "./BookBuilder.module.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}))

export default function BookBuilder() {
  const classes = useStyles()
  // return null
  return (
    // <div className={classes.root}>
    <div className={cx(classes.root, css.main)}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
]

// import React, { Component } from "react"
// import { observer } from "mobx-react"
// import { toJS } from "mobx"

// import {
//   Button,
//   Icon,
//   Menu,
//   MenuItem,
//   Popover,
//   Position,
// } from "@blueprintjs/core"

// import { IconNames } from "@blueprintjs/icons"
// import { maps } from "../../Stores/InitStores"
// import Utils from "../../Utils/Utils"

// import css from "./BookBuilder.module.scss"
// import { Checkbox } from "material-ui"

// class BookBuilder extends Component {
//   state = { selectedMap: "Select Map" }

//   changeMap = ({ index, mapId }) => {
//     const { onChangeWorld } = this.props
//     const map = Utils.getMapFromId({ id: mapId })

//     const mapName = map ? map.data && map.data.title : ""

//     onChangeWorld({ index, mapId })
//     this.setState({ selectedMap: mapName })
//   }

//   onDeleteMap = async ({ map }) => {
//     if (this._deleting) return
//     this._deleting = true
//     try {
//       await map.delete()
//       this._deleting = false
//     } catch (err) {
//       this._deleting = false
//     }
//   }

//   render() {
//     const { showReleasedToProd, showReleased, showDelete } = this.props
//     const { selectedMap } = this.state
//     const savedMaps = Utils.getItemsFromDbObj({ dbList: maps })

//     const filteredMaps = showReleased
//       ? savedMaps
//       : savedMaps.filter((map) => map.data.released)

//     if (!filteredMaps[0]) {
//       return null
//     }

//     const sortedMaps = Utils.sortDataByNestedKey({
//       data: filteredMaps,
//       keys: ["data", "title"],
//       order: "ASC",
//     })

//     const mapList = sortedMaps.map((map, index) => {
//       const { id } = map
//       const { name, title, released, releasedToProd, description } = map.data
//       const { updateIsReleasedProperty, updateReleasedToProd } = this.props

//       const text = (
//         <span className={css.mapPickerRow}>
//           {`${title}`}
//           {/* {`${description}`} */}
//           {/* {`map ${name}: ${title}`} */}
//           {/* {`id: ${id}`} */}
//           <div className={css.mapPickerRowButtons}>
//             <span className={css.mapPickerButton}>{`${name}  ---  `}</span>
//             {showReleased && (
//               <span className={css.mapPickerButton}>
//                 Released
//                 <Checkbox
//                   onClick={() => updateIsReleasedProperty({ id })}
//                   checked={released}
//                 />
//               </span>
//             )}
//             {showReleasedToProd && (
//               <span className={css.mapPickerButton}>
//                 To Prod
//                 <Checkbox
//                   onClick={() => updateReleasedToProd({ id })}
//                   checked={releasedToProd}
//                 />
//               </span>
//             )}
//             {showDelete && (
//               <span onClick={() => this.onDeleteMap({ map })}>
//                 <Icon icon={IconNames.TRASH} />
//               </span>
//             )}
//           </div>
//         </span>
//       )

//       return (
//         <MenuItem
//           onClick={() => this.changeMap({ index, mapId: id })}
//           text={text}
//         />
//       )
//     })

//     const renderedMapList = <Menu>{mapList}</Menu>

//     const worldPicker = (
//       <Popover
//         className={css.main}
//         popoverClassName={css.popoverClassName}
//         content={renderedMapList}
//         position={Position.BOTTOM}
//       >
//         <Button className={css.worldPickerButton}>
//           {selectedMap}
//           <Icon icon="caret-down" />
//         </Button>
//       </Popover>
//     )

//     return worldPicker
//   }
// }
// export default observer(BookBuilder)
