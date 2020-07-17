import React from "react"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import _get from "lodash.get"
import Images from "../../images/images.js"
import cx from "classnames"

// import { Button, Dialog, ButtonGroup } from "@blueprintjs/core"
import { Button, Dialog, ButtonGroup, Icon } from "@blueprintjs/core"
import Utils from "../../Utils/Utils.js"

import css from "./BookPicker.module.scss"
import localStateStore from "../../Stores/LocalStateStore/LocalStateStore.js"
import BookTableOfContents from "../BookTableOfContents/BookTableOfContents.js"
import { maps, books } from "../../Stores/InitStores.js"
// import { Icon } from "@material-ui/core"
import { IconNames } from "@blueprintjs/icons"
import WorldMultiPicker2 from "../WorldMultiPicker2/WorldMultiPicker2.js"

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
  books2 = books.docs || []
  // books2 = bookList
  state = {
    showBookBuilder: false,
    selectedBook: this.books2[0],
    showBookEditor: false,
    questToEdit: null,
  }

  changeSelectedBook = ({ index }) => {
    const selectedBook = this.books2[index]

    this.setState({
      selectedBook,
    })
  }

  editBook = ({ index, selectedBook }) => {
    console.log("index", index) // zzz
    // const selectedBook = this.books2[index]
    console.log("selectedBook", selectedBook) // zzz

    // this.books2.forEach((item) => {
    //   this.books2.add(item)
    // })
    this.setState({
      openBookBuilder: !this.state.showBookBuilder,
      selectedBook,
    })
  }

  renderChapterView = () => {
    const { selectedBook } = this.state
    const { id: bookId, data: bookData } = selectedBook
    const { imageName } = bookData

    console.log("selectedBook", toJS(selectedBook)) // zzz
    console.log("selectedBook.data.chapters", toJS(selectedBook.data.chapters)) // zzz
    const showBookEditor = true
    // const { showBookEditor } = this.state

    const worldMultiPickerProps = {
      maps,
      onClose: ({ selectedItems }) =>
        this.onCloseWorldPicker({ selectedItems, bookId }),
    }

    console.log("selectedBook.imageName", toJS(imageName)) // zzz
    // const bookImage = Images.backgrounds[selectedBook && selectedBook.imageName]
    // const bookTableOfContents01 = Images.backgrounds[imageName]
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
        {showBookEditor && (
          <div class={css.worldPicker}>
            <WorldMultiPicker2
              props={worldMultiPickerProps}
            ></WorldMultiPicker2>
          </div>
        )}
      </div>
    )
  }

  onDeleteBook = async ({ book, event }) => {
    console.log("book", toJS(book)) // zzz
    await book.delete()
    return
  }

  onClose = async ({ book, event }) => {
    this.setState({ questToEdit: book, showBookEditor: true })
  }

  onCloseWorldPicker = async ({ selectedItems, bookId }) => {
    console.log("selectedItems", toJS(selectedItems)) // zzz
    console.log("bookId", toJS(bookId)) // zzz
    const bookUnderEdit = books.docs.find((item) => item.id === bookId)

    console.log("bookUnderEdit", toJS(bookUnderEdit)) // zzz
    const newChapters = selectedItems.map((item) => item.id)
    console.log("newChapters", toJS(newChapters)) // zzz
    const newProps = { chapters: newChapters }
    Object.assign(bookUnderEdit.data, toJS(newProps))

    // bookUnderEdit.data.chapters = newChapters

    await bookUnderEdit.update(bookUnderEdit.data)
    // await map.update(bookUnderEdit.data)
  }

  onChooseQuests = async ({ book, event }) => {
    this.setState({ questToEdit: book, showBookEditor: true })
  }

  render = () => {
    const isProdRelease = false

    console.log("this.books2", toJS(this.books2)) // zzz
    const {} = this.props
    // const showBookEditor = true
    // // const { showBookEditor } = this.state

    const renderedBookList = this.books2.map((book, index) => {
      const bookItem = book.data
      console.log("bookItem", toJS(bookItem)) // zzz
      const title = bookItem.name

      const mapId = bookItem.id
      const bookImage = Images.backgrounds[bookItem.imageName]

      const renderedBook = (
        <div
          onClick={() => this.changeSelectedBook({ index, mapId })}
          className={css.questRow}
        >
          <div className={cx(css.tableCell)}>
            <div className={cx(css.questName)}>{title}</div>
            <img className={css.bookImage} src={bookImage} alt={"imagex"} />
          </div>
          {!isProdRelease && (
            <span onClick={(event) => this.onDeleteBook({ book, event })}>
              <Icon icon={IconNames.TRASH} />
            </span>
          )}
          {!isProdRelease && (
            <span onClick={(event) => this.onChooseQuests({ book, event })}>
              <Icon icon={IconNames.EDIT} />
            </span>
          )}
        </div>
      )
      return renderedBook
    })

    const backgroundImage = Images.backgrounds["meadow"]
    // const props = { maps, onClose: this.onClose }

    return (
      <Dialog isOpen={true} isCloseButtonShown={true} className={css.main}>
        {/* {showBookEditor && (
          <div class={css.worldPicker}>
            <WorldMultiPicker2 props={props}></WorldMultiPicker2>
          </div>
        )} */}

        <img
          className={css.backgroundImage}
          src={backgroundImage}
          alt={"imagex"}
        />

        <div className={css.questPage}>
          <div className={css.header}>
            <span className={css.gameTitle}>Troll Need Gold</span>
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
