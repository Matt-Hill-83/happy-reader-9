import React from "react"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import _get from "lodash.get"
import Images from "../../images/images.js"
import cx from "classnames"

import { Button, Dialog, ButtonGroup } from "@blueprintjs/core"
import Utils from "../../Utils/Utils.js"

import css from "./BookPicker.module.scss"
import localStateStore from "../../Stores/LocalStateStore/LocalStateStore.js"
import BookTableOfContents from "../BookTableOfContents/BookTableOfContents.js"
import { books } from "../../Stores/InitStores.js"

const bookList = [
  {
    name: "Functional Quests",
    imageName: "bookCover01BatOfDoom",
    chapters: [
      "6u9TJAt500bF8um6VBA1",
      "Qcdiltt2IsPsu8UboUk7",
      "0RJSnOlO3hOax3o5dkZa",
    ],
  },
  {
    name: "Easy stuff",
    imageName: "bookCover01BatOfDoom",
    chapters: [
      "6u9TJAt500bF8um6VBA1",
      "Qcdiltt2IsPsu8UboUk7",
      "0RJSnOlO3hOax3o5dkZa",
    ],
  },
  {
    name: "Fun Dialog",
    imageName: "bookCover01BatOfDoom",
    chapters: [
      "6u9TJAt500bF8um6VBA1",
      "Qcdiltt2IsPsu8UboUk7",
      "0RJSnOlO3hOax3o5dkZa",
    ],
  },
  {
    name: "Old Stuff",
    imageName: "bookCover01BatOfDoom",
    chapters: [
      "6u9TJAt500bF8um6VBA1",
      "Qcdiltt2IsPsu8UboUk7",
      "0RJSnOlO3hOax3o5dkZa",
    ],
  },
  {
    name: "Charlie Stuff",
    imageName: "bookCover01BatOfDoom",
    chapters: [
      "6u9TJAt500bF8um6VBA1",
      "Qcdiltt2IsPsu8UboUk7",
      "0RJSnOlO3hOax3o5dkZa",
    ],
  },
  {
    name: "Scraps",
    imageName: "bookCover01BatOfDoom",

    chapters: [
      "6u9TJAt500bF8um6VBA1",
      "Qcdiltt2IsPsu8UboUk7",
      "0RJSnOlO3hOax3o5dkZa",
    ],
  },
]

class BookPicker extends React.Component {
  state = {
    showBookBuilder: false,
    selectedBook: bookList[0],
  }

  changeSelectedBook = ({ index }) => {
    const selectedBook = bookList[index]

    this.setState({
      selectedBook,
    })
  }

  editBook = ({ index, selectedBook }) => {
    console.log("index", index) // zzz
    // const selectedBook = bookList[index]
    console.log("selectedBook", selectedBook) // zzz

    books.add(selectedBook)
    this.setState({
      openBookBuilder: !this.state.showBookBuilder,
      selectedBook,
    })
  }

  renderChapterView = () => {
    const { selectedBook } = this.state

    // const bookImage = Images.backgrounds[selectedBook && selectedBook.imageName]
    const bookTableOfContents01 = Images.backgrounds["bookTableOfContents01"]

    return (
      <div className={css.chapterView}>
        <img
          className={cx(css.bookTableOfContents01)}
          src={bookTableOfContents01}
          alt={"imagex"}
        />

        <BookTableOfContents
          selectedBook={selectedBook}
          onChangeWorld={this.props.onChangeWorld}
        />
        <Button
          className={css.playButton}
          onClick={() => this.editBook({ selectedBook })}
        >
          {/* <Button className={css.playButton} onClick={this.changeSelectedBook}> */}
          Back----
        </Button>
      </div>
    )
  }

  render = () => {
    const {} = this.props
    const { showToggle } = this.state

    const renderedBookList = bookList.map((book, index) => {
      const title = book.name

      const mapId = book.id
      const bookImage = Images.backgrounds[book.imageName]

      const text = (
        <div
          onClick={() => this.changeSelectedBook({ index, mapId })}
          className={css.questRow}
        >
          <div className={cx(css.tableCell)}>
            <div className={cx(css.questName)}>{title}</div>
            <img className={css.bookImage} src={bookImage} alt={"imagex"} />
          </div>
        </div>
      )
      return text
    })

    const backgroundImage = Images.backgrounds["meadow"]
    const backButtonLabel = "Back To Book LIst"

    return (
      <Dialog isOpen={true} isCloseButtonShown={true} className={css.main}>
        {showToggle && (
          <ButtonGroup className={css.buttonGroup} color="primary">
            <Button onClick={this.toggleShowProd}>{backButtonLabel}</Button>
          </ButtonGroup>
        )}
        <img
          className={css.backgroundImage}
          src={backgroundImage}
          alt={"imagex"}
        />
        <div className={css.questPage}>
          <div className={css.header}>
            <span className={css.gameTitle}>Tickle Brain</span>
          </div>
          <div className={css.playerStatsSection}>
            <div className={css.playerStatsRow}>
              <span className={css.playerStatsKey}>Gold</span>
              <span className={css.playerStatsValue}>500</span>
            </div>
            <div className={css.playerStatsRow}>
              <span className={css.playerStatsKey}>Trophies</span>
              <span className={css.playerStatsValue}>2</span>
            </div>
            <div className={css.playerStatsRow}>
              <span className={css.playerStatsKey}>Dresses</span>
              <span className={css.playerStatsValue}>0</span>
            </div>
          </div>
          <div className={css.content}>
            <div className={css.questTable}>
              <div className={css.scrollArea}>{renderedBookList}</div>
            </div>
            {this.renderChapterView()}
          </div>

          {/* <Button className={css.playButton} onClick={closeQuestPicker}>
            PLAY
          </Button> */}
        </div>
      </Dialog>
    )
  }
}

export default observer(BookPicker)
