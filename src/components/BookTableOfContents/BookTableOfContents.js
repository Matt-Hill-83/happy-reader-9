import React from "react"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import _get from "lodash.get"
import Images from "../../images/images.js"
import cx from "classnames"

import Utils from "../../Utils/Utils.js"

import { maps } from "../../Stores/InitStores.js"

import css from "./BookTableOfContents.module.scss"
import localStateStore from "../../Stores/LocalStateStore/LocalStateStore.js"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

class BookTableOfContents extends React.Component {
  state = {}

  constructor(props) {
    super(props)
    const showProdInitialValue = localStateStore.getIsProdRelease()
    this.state = { showProd: true, showToggle: !showProdInitialValue }
  }

  toggleShowProd = () => {
    this.setState({ showProd: !this.state.showProd })
  }

  render = () => {
    const { selectedBook, onChangeWorld } = this.props
    const {} = this.state

    const savedMaps = Utils.getItemsFromDbObj({ dbList: maps })
    // const savedMaps = Utils.getItemsFromDbObj({ dbList: maps })
    let filteredMaps = []

    const sortedWorlds = Utils.sortWorlds({ worlds: maps })
    console.log("sortedWorlds", toJS(sortedWorlds)) // zzz

    filteredMaps = sortedWorlds.filter((map) => {
      // filteredMaps = maps.docs.filter((map) => {
      // filteredMaps = savedMaps.filter((map) => {
      const chapters = _get(selectedBook, "data.chapters") || []

      return map.data.released && chapters.includes(map.id)
    })

    console.log("filteredMaps", toJS(filteredMaps)) // zzz
    // const sortedWorlds = Utils.sortWorlds({ worlds: filteredMaps })

    const sortedMaps = filteredMaps

    const mapList = sortedMaps.map((map, index) => {
      // const mapList = sortedMaps.map((map, index) => {
      const { title } = map.data

      const mapId = map.id

      const text = (
        <div className={css.questRow}>
          <div className={cx(css.tableCell, css.questName)}>{title}</div>
          <div className={cx(css.tableCell, css.dragonPoints)}>100 </div>
          <div className={cx(css.tableCell, css.questStatus)}>
            <span role="img">✅</span>
          </div>
        </div>
      )

      return <Link to={`/world/${mapId}`}>{text}</Link>
      return <div onClick={() => onChangeWorld({ mapId })}>{text}</div>
    })

    const tableHeader = (
      <div className={cx(css.tableHeader)}>
        <div className={cx(css.tableCell, css.name)}>Name</div>
        <div className={cx(css.tableCell, css.gold)}>Gold</div>
        <div className={cx(css.tableCell, css.status)}>Completed</div>
      </div>
    )
    const dummyQuest01 = Images.backgrounds["dummyQuest01"]
    return (
      <div className={css.main}>
        <div className={css.questTable}>
          {tableHeader}
          <div className={css.scrollArea}>{mapList}</div>
        </div>
        <img
          className={cx(css.dummyQuest01)}
          src={dummyQuest01}
          alt={"imagex"}
        />
      </div>
    )
  }
}

export default observer(BookTableOfContents)
