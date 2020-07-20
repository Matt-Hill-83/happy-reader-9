import React from "react"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import _get from "lodash.get"
import Images from "../../images/images.js"
import cx from "classnames"

import { Button, Dialog, Icon } from "@blueprintjs/core"

import BookTableOfContents from "../BookTableOfContents/BookTableOfContents.js"
import { maps, books } from "../../Stores/InitStores.js"
import { IconNames } from "@blueprintjs/icons"
import WorldMultiPicker2 from "../WorldMultiPicker2/WorldMultiPicker2.js"
import JSONEditorDemo from "../JsonEdtor/JSONEditorDemo.js"

import css from "./BookPicker.module.scss"
import Utils from "../../Utils/Utils.js"

class BookPicker extends React.Component {
  state = {
    showBookBuilder: false,
    selectedBook: books.docs[0],
    showBookEditor: false,
    questToEdit: null,
    jsonUnderEdit: "null",
  }

  changeSelectedBook = ({ bookId }) => {
    const selectedBook = Utils.getBookFromId({ id: bookId })

    this.setState({
      selectedBook,
    })
  }

  editBook = ({ selectedBook }) => {
    this.setState({
      showBookBuilder: !this.state.showBookBuilder,
      jsonUnderEdit: selectedBook.data,
      selectedBook,
    })
  }

  onCloseBookBuilder = () => {
    this.setState({
      showBookBuilder: false,
      selectedBook: books.docs[0] || {},
    })
  }

  // forceUpdateTopLevel = () => {
  //   this.props.forceUpdate()
  // }

  onChangeJSON = (json) => {
    this.setState({ jsonUnderEdit: json })
    // selectedBook.update(json)
    // this.forceUpdateTopLevel()
  }

  updateTime = () => {
    const time = new Date().toISOString()

    this.setState({
      // This is updating the wrong object
      json: Object.assign({}, this.state.json, { time }),
    })
  }

  saveBookChanges = ({ selectedBook, bookId }) => {
    this.setState({ showBookBuilder: false })
    this.updateBook({ newProps: selectedBook, bookId })
  }

  renderChapterView = () => {
    const { showBookBuilder, selectedBook, jsonUnderEdit } = this.state
    const { id: bookId } = selectedBook
    const { chapters, name } = selectedBook.data

    const worldMultiPickerProps = {
      selectedWorlds: toJS(chapters) || [],
      allWorlds: maps,
      bookId,
      onClose: ({ selectedItems }) => {
        const newChapters = selectedItems.map((item) => item.id)
        const newProps = { chapters: newChapters }
        this.updateBook({ newProps, bookId })
      },
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
        <Dialog
          canEscapeKeyClose={true}
          canOutsideClickClose={true}
          isCloseButtonShown={true}
          isOpen={showBookBuilder}
          onClose={this.onCloseBookBuilder}
          title={"test"}
        >
          <div className="contents">
            <div className="menu">
              <button onClick={this.updateTime}>
                Create/update a field "time"
              </button>
            </div>

            {/* I neeed to store the json in state.  Now it is only stored in the component */}
            <JSONEditorDemo
              json={jsonUnderEdit}
              onChangeJSON={this.onChangeJSON}
            />
          </div>
          <WorldMultiPicker2 props={worldMultiPickerProps}></WorldMultiPicker2>
          <Button
            className={css.playButton}
            onClick={() =>
              this.saveBookChanges({ selectedBook: jsonUnderEdit, bookId })
            }
          >
            Save Changes
          </Button>
        </Dialog>
      </div>
    )
  }

  onDeleteBook = async ({ book }) => {
    await book.delete()
    this.setState({ selectedBook: books.docs[0] || null })
    // this.forceUpdateTopLevel()
  }

  onClose = async ({ book }) => {
    this.setState({ questToEdit: book, showBookEditor: true })
  }

  updateBook = async ({ bookId, newProps }) => {
    const bookUnderEdit = books.docs.find((item) => item.id === bookId)

    Object.assign(bookUnderEdit.data, toJS(newProps))
    await bookUnderEdit.update(bookUnderEdit.data)
  }

  addBook = async () => {
    const newBook = {
      name: "new book",
      chapters: [],
      imageName: "bookCover01BatOfDoom",
    }
    await books.add(newBook)
    // this.forceUpdateTopLevel()
  }

  onChooseQuests = async ({ book }) => {
    this.setState({ questToEdit: book, showBookEditor: true })
  }

  render() {
    const isProdRelease = false

    const {} = this.props
    const { selectedBook } = this.state

    const sortedBooks = Utils.sortDataByNestedKey({
      data: books.docs,
      keys: ["data", "name"],
      order: "ASC",
    })

    const renderedBookList = sortedBooks.map((book) => {
      const bookItem = book.data
      const title = bookItem.name

      const bookId = book.id
      const bookImage = Images.backgrounds[bookItem.imageName]

      const renderedBook = (
        <div
          onClick={() => this.changeSelectedBook({ bookId })}
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
