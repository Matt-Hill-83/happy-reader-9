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

const bookList = [
  {
    name: "Run for the Hills!!!",
    imageName: "bookCover01BatOfDoom",
    chapters: [
      "yFhG3pGNtOVZKoQ7K5fG",
      "8hmBGXtP870qDA8xlXbw",
      "UA2QDGO1knDcq6Y9sD4y",
    ],
  },
  {
    name: "The Scary Bat!!!",
    imageName: "bookCover01BatOfDoom",
    chapters: ["Kx78cfHCkhpm2NQnmCp8", "8hmBGXtP870qDA8xlXbw"],
  },
  {
    name: "Fun Dialog",
    imageName: "bookCover01BatOfDoom",
    chapters: ["Kx78cfHCkhpm2NQnmCp8", "8hmBGXtP870qDA8xlXbw"],
  },
  {
    name: "Old Stuff",
    imageName: "bookCover01BatOfDoom",
    chapters: ["Kx78cfHCkhpm2NQnmCp8", "8hmBGXtP870qDA8xlXbw"],
  },
  {
    name: "Charlie Stuff",
    imageName: "bookCover01BatOfDoom",
    chapters: [
      "K2MNaqNyN5doDvq5DeSsU",
      "KsdQq5puwQMFlMIfOENJV",
      "KryOfvqHlBCWpPKWjp8vJ",
      "KSHNmmMhxxShqpWhOpFjU",
      "Ki2FknxtJIPxjyApAIrQ5",
      "KJkrRsMGKkoatdAG6XCn3",
      "KPT0kV1znaii2wzDm5hwJ",
    ],
  },
  {
    name: "Scraps",
    imageName: "bookCover01BatOfDoom",

    chapters: [],
  },
]

class BookPicker extends React.Component {
  state = { showChapterView: false, selectedBook: bookList[0] }

  changeSelectedBook = ({ index }) => {
    const selectedBook = bookList[index]
    console.log("selectedBook", toJS(selectedBook)) // zzz

    this.setState({
      showChapterView: !this.state.showChapterView,
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
        {/* <Button className={css.playButton} onClick={this.changeSelectedBook}>
          Back
        </Button> */}
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

          {/* <Button className={css.playButton} onClick={closeYouWinModal}>
            PLAY
          </Button> */}
        </div>
      </Dialog>
    )
  }
}

export default observer(BookPicker)
