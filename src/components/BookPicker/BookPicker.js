import React from "react"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import _get from "lodash.get"
import Images from "../../images/images.js"
import cx from "classnames"

import { Button, Dialog, Icon } from "@blueprintjs/core"
// import Utils from "../../Utils/Utils.js"

import BookTableOfContents from "../BookTableOfContents/BookTableOfContents.js"
import { maps, books } from "../../Stores/InitStores.js"
import { IconNames } from "@blueprintjs/icons"
import WorldMultiPicker2 from "../WorldMultiPicker2/WorldMultiPicker2.js"
import JSONEditorDemo from "../JsonEdtor/JSONEditorDemo.js"

import css from "./BookPicker.module.scss"

class BookPicker extends React.Component {
  state = {
    showBookBuilder: false,
    selectedBook: books.docs[0],
    showBookEditor: false,
    questToEdit: null,
  }

  changeSelectedBook = ({ index }) => {
    const selectedBook = books.docs[index]

    this.setState({
      selectedBook,
    })
  }

  editBook = ({ selectedBook }) => {
    this.setState({
      showBookBuilder: !this.state.showBookBuilder,
      selectedBook,
    })
  }

  forceUpdate = () => {
    this.props.forceUpdate()
  }

  onChangeJSON = (json) => {
    console.log("onChangeJSON") // zzz
    const { selectedBook } = this.state
    selectedBook.update(json)
    this.forceUpdate()
  }

  updateTime = () => {
    const time = new Date().toISOString()

    this.setState({
      // This is updating the wrong object
      json: Object.assign({}, this.state.json, { time }),
    })
  }

  renderChapterView = () => {
    const { showBookBuilder, selectedBook, json } = this.state
    const { id: bookId } = selectedBook
    const { chapters, name } = selectedBook.data
    console.log("selectedBook", toJS(selectedBook)) // zzz
    console.log("json", json) // zzz

    const worldMultiPickerProps = {
      selectedWorlds: toJS(chapters) || [],
      allWorlds: maps,
      bookId,
      onClose: ({ selectedItems }) =>
        this.updateBook({ selectedItems, bookId }),
    }

    // const bookImage = Images.backgrounds[selectedBook && selectedBook.imageName]
    // const bookTableOfContents01 = Images.backgrounds[imageName]
    const bookTableOfContents01 = Images.backgrounds["bookTableOfContents01"]

    return (
      <div className={css.chapterView}>
        <div className={css.selectedBook}>name {name}</div>
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
          Edit Book
        </Button>
        {showBookBuilder && (
          <div class={css.worldPicker}>
            <div className="app">
              <h1>JSONEditor</h1>
              <div className="contents">
                <div className="menu">
                  <button onClick={this.updateTime}>
                    Create/update a field "time"
                  </button>
                </div>
                <JSONEditorDemo
                  // json={json}
                  json={selectedBook.data}
                  onChangeJSON={this.onChangeJSON}
                />
              </div>
            </div>
            <WorldMultiPicker2
              props={worldMultiPickerProps}
            ></WorldMultiPicker2>
          </div>
        )}
      </div>
    )
  }

  onDeleteBook = async ({ book }) => {
    await book.delete()
    this.forceUpdate()
  }

  onClose = async ({ book }) => {
    this.setState({ questToEdit: book, showBookEditor: true })
  }

  updateBook = async ({ selectedItems, bookId }) => {
    const bookUnderEdit = books.docs.find((item) => item.id === bookId)

    if (selectedItems) {
      const newChapters = selectedItems.map((item) => item.id)
      const newProps = { chapters: newChapters }
      Object.assign(bookUnderEdit.data, toJS(newProps))
    }

    await bookUnderEdit.update(bookUnderEdit.data)
  }

  addBook = async () => {
    const newBook = {
      name: "new book",
      chapters: [],
      imageName: "bookCover01BatOfDoom",
    }
    await books.add(newBook)
    this.forceUpdate()
  }

  onChooseQuests = async ({ book }) => {
    this.setState({ questToEdit: book, showBookEditor: true })
  }

  render = () => {
    console.log("render Book Picker **********************************") // zzz
    console.log("books.docs.length", toJS(books.docs.length)) // zzz
    const isProdRelease = false

    const {} = this.props
    const { selectedBook } = this.state

    const renderedBookList = books.docs.map((book, index) => {
      console.log("book".data, toJS(book.data)) // zzz
      const bookItem = book.data
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
            <span onClick={() => this.editBook({ selectedBook })}>
              <Icon icon={IconNames.EDIT} />
            </span>
          )}
        </div>
      )
      return renderedBook
    })

    const backgroundImage = Images.backgrounds["meadow"]

    return (
      <Dialog isOpen={true} isCloseButtonShown={true} className={css.main}>
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

          <Button className={css.addBookButton} onClick={this.addBook}>
            Add Book
          </Button>
        </div>
      </Dialog>
    )
  }
}

export default observer(BookPicker)
