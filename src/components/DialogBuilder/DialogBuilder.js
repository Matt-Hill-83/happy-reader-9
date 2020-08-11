import { IconNames } from "@blueprintjs/icons"
import _get from "lodash.get"
import { Button, Classes, ButtonGroup } from "@blueprintjs/core"
import { toJS } from "mobx"
import cx from "classnames"
import React, { useEffect, useState } from "react"

import MyTextEditor from "../MyTextEditor/MyTextEditor"
import AddDeleteButtonGroup from "../AddDeleteButtonGroup/AddDeleteButtonGroup"
import css from "./DialogBuilder.module.scss"
import SimpleSelectObj from "../SimpleSelectObj/SimpleSelectObj"
import Constants from "../../Utils/Constants/Constants"
import Utils from "../../Utils/Utils"

export default function DialogBuilder({ props }) {
  const [rowData, setrowData] = useState({})

  const { saveItems, world } = props
  const scenes = _get(world, "data.newGrid5") || []

  useEffect(() => {
    // on mount

    // returned function will be called on component unmount
    return () => {}
  }, [])

  // on change in props
  useEffect(() => {
    // setQuestConfig(props.questConfig || {})
  }, [props.questConfig])

  const dataParts = {
    content: "",
    fakeDivs: [],
  }

  let rowNum = { value: 0 }

  const updateTextChanges = ({ content, scenes, saveItems, metaInfoMap }) => {
    const linesArray = content.split("\n")

    console.log("metaInfoMap", toJS(metaInfoMap)) // zzz
    linesArray.forEach((line, lineIndex) => {
      const dataStructureIndices = metaInfoMap[lineIndex]
      // console.log("dataStructureIndices", toJS(dataStructureIndices)) // zzz
      const reg = new RegExp(/(.*)==>(.+)---(.+)---(.+)<==/)
      const match = line.match(reg)

      if (dataStructureIndices) {
        const newText = match[1]

        const { sceneIndex, frameIndex, dialogIndex } = dataStructureIndices

        const scene = scenes[sceneIndex]
        const frames = _get(scene, "frameSet.frames") || []
        const frame = frames[frameIndex]
        const dialog = frame.dialog[dialogIndex]

        if (dialog !== newText) {
          frame.dialog[dialogIndex].text = newText
        }
      }
    })
    saveItems()
  }

  const renderCritterPicker = ({ dialog, frame, saveItems }) => {
    const { critters1, critters2 } = frame
    const crittersInFrame = [...critters1, ...critters2]
    const selectedItem = crittersInFrame.find(
      (item) => item.name === dialog.character
    )

    const onChangeCritter = (newValue) => {
      dialog.character = newValue.name
      saveItems()
    }

    return (
      <SimpleSelectObj
        className={css.sceneDropdown}
        items={crittersInFrame}
        value={selectedItem}
        getOptionLabel={(option) => _get(option, "name")}
        onChange={onChangeCritter}
      />
    )
  }

  const getStyles = ({ sceneIndex }) => {
    const colors = Constants.subQuestColors
    const colorIndex = sceneIndex % colors.length
    const backgroundColor = colors[colorIndex]
    return {
      "background-color": `#${backgroundColor}`,
    }
  }

  const addNewRowToTextArea = ({ text, fakeDiv, rowNum, dataParts }) => {
    dataParts.fakeDivs.push(fakeDiv)
    dataParts.content += `${text}\n`
    rowNum.value++
  }

  const insertDummyRowBetweenFrames = ({
    frameIndex,
    scene,
    style,
    rowNum,
    dataParts,
  }) => {
    const fakeDiv = (
      <div
        className={`${css.fakeDiv}
   ${css.frameSeparatorDiv}
   ${frameIndex === 0 ? css.newSceneRow : ""}
   
   `}
        style={style}
      >
        {`${scene.location.name}  - F${frameIndex}`}
      </div>
    )

    const text = "-------------------"

    addNewRowToTextArea({ text, fakeDiv, rowNum, dataParts })
  }

  const onAddRow = ({ rowIndex, before, items }) => {
    const newElement = Constants.getNewDialog()
    Utils.addArrayElement({
      newElement,
      before,
      index: rowIndex,
      array: items,
    })

    saveItems()
  }

  const onDeleteRow = ({ rowIndex, items }) => {
    Utils.deleteArrayElement({ index: rowIndex, array: items })
    saveItems()
  }

  const metaInfoMap = { test: 555 }
  const insertRowInTextArea = ({
    dialogs,
    dialog,
    style,
    frame,
    sceneIndex,
    frameIndex,
    dialogIndex,
    rowNum,
  }) => {
    if (dialog.text) {
      const metaInfo = `==>${sceneIndex}---${frameIndex}---${dialogIndex}<==`
      metaInfoMap[rowNum.value] = { sceneIndex, frameIndex, dialogIndex }

      const text = `${dialog.text} ${metaInfo}`
      const fakeDiv = (
        <div className={css.fakeDiv} style={style}>
          <AddDeleteButtonGroup
            props={{
              rowIndex: dialogIndex,
              onDelete: ({ rowIndex }) =>
                onDeleteRow({ items: dialogs, rowIndex }),
              onAdd: ({ rowIndex, before }) =>
                onAddRow({ items: dialogs, rowIndex, before }),
              vertical: false,
              noPopover: true,
              className: css.dialogBuilderButtonGroup,
              moreButtons: renderCritterPicker({ dialog, frame, saveItems }),
            }}
          />
          <div className={css.emptySpace}></div>
        </div>
      )
      addNewRowToTextArea({ text, fakeDiv, rowNum, dataParts })
    }
  }

  scenes.forEach((scene, sceneIndex) => {
    const frames = _get(scene, "frameSet.frames") || []
    const style = getStyles({ sceneIndex })

    frames.forEach((frame, frameIndex) => {
      insertDummyRowBetweenFrames({
        frameIndex,
        scene,
        style,
        rowNum,
        dataParts,
      })

      if (!frame.dialog) {
        frame.dialog = []
      }

      frame.dialog.forEach((dialog, dialogIndex) => {
        insertRowInTextArea({
          dialogs: frame.dialog,
          rowNum,
          dialog,
          style,
          frame,
          sceneIndex,
          frameIndex,
          dialogIndex,
        })
      })
    })
  })

  const myTextEditorProps = {
    content: dataParts.content,
    className: css.textEditor,
    onSubmit: ({ content }) =>
      updateTextChanges({ content, scenes, saveItems, metaInfoMap }),
  }

  return (
    <div className={css.main}>
      <div className={css.controlPanel}>{dataParts.fakeDivs}</div>
      <MyTextEditor props={myTextEditorProps}></MyTextEditor>
    </div>
  )
}
