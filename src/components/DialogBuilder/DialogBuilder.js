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
import WorldBuilderUtils from "../../Utils/WorldBuilderUtils"

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

    linesArray.forEach((line, lineIndex) => {
      const dataStructureIndices = metaInfoMap[lineIndex]

      if (dataStructureIndices) {
        const newText = line

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
    const dummyRowLabel = `${scene.location.name}  - F${frameIndex}`

    const fakeDiv = (
      <div
        className={`${css.fakeDiv} ${css.frameSeparatorDiv}
   ${frameIndex === 0 ? css.newSceneRow : ""}
   
   `}
        style={style}
      >
        {dummyRowLabel}
      </div>
    )

    const text = dummyRowLabel

    addNewRowToTextArea({ text, fakeDiv, rowNum, dataParts })
  }

  const onAddDialogRow = ({ rowIndex, before, items }) => {
    const newElement = Constants.getNewDialog()
    Utils.addArrayElement({
      newElement,
      before,
      index: rowIndex - 1,
      array: items,
    })

    saveItems()
  }

  const onDeleteRow = ({ rowIndex, items }) => {
    Utils.deleteArrayElement({ index: rowIndex, array: items })
    saveItems()
  }

  const splitFrame = ({ dialogIndex, frame, frames, frameIndex }) => {
    console.log("frame", toJS(frame)) // zzz
    const newFrame = WorldBuilderUtils.getNewFrame({ props: {} })
    // const newFrame = WorldBuilderUtils.getNewFrame({ props: { ...frame } })
    const dialog1 = frame.dialog.slice(0, dialogIndex)
    const dialog2 = frame.dialog.slice(dialogIndex)

    console.log("dialogIndex", dialogIndex) // zzz
    console.log("dialog1", dialog1) // zzz
    console.log("dialog2", dialog2) // zzz

    frame.dialog.length = 0
    frame.dialog.push(...dialog1)
    newFrame.dialog = [...dialog2]

    Utils.addArrayElement({
      newElement: newFrame,
      before: false,
      index: frameIndex,
      array: frames,
    })

    saveItems()
  }

  const joinFrames = ({ rowIndex, frame, frames, prevFrame }) => {
    prevFrame.dialog.push(...frame.dialog)
    Utils.deleteArrayElement({ index: rowIndex, array: frames })

    saveItems()
  }

  const metaInfoMap = {}
  const renderTextAreaRow = ({
    dialog,
    dialogIndex,
    dialogs,
    frame,
    frameIndex,
    frames,
    rowNum,
    sceneIndex,
    style,
  }) => {
    if (dialog.text) {
      const renderSplitFrameButton = ({}) => {
        return (
          <Button
            onClick={() =>
              splitFrame({
                dialogIndex,
                frameIndex,
                frames,
                frame,
              })
            }
            // icon={IconNames.ADD}
          >
            Sp
          </Button>
        )
      }

      const renderJoinFramesButton = ({}) => {
        return (
          <Button
            onClick={() =>
              joinFrames({
                rowIndex: frameIndex,
                prevFrame: frames[frameIndex - 1],
                frames,
                frame,
              })
            }
            // icon={IconNames.ADD}
          >
            Join
          </Button>
        )
      }

      const moreButtons = [
        renderCritterPicker({ dialog, frame, saveItems }),
        renderSplitFrameButton({}),
        renderJoinFramesButton({}),
      ]

      metaInfoMap[rowNum.value] = { sceneIndex, frameIndex, dialogIndex }

      const text = `${dialog.text}`
      const fakeDiv = (
        <div className={css.fakeDiv} style={style}>
          <AddDeleteButtonGroup
            props={{
              rowIndex: dialogIndex,
              onDelete: ({ rowIndex }) =>
                onDeleteRow({ items: dialogs, rowIndex }),
              onAdd: ({ rowIndex, before }) =>
                onAddDialogRow({ items: dialogs, rowIndex, before }),
              vertical: false,
              noPopover: true,
              className: css.dialogBuilderButtonGroup,
              moreButtons: moreButtons,
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
        renderTextAreaRow({
          dialog,
          dialogIndex,
          dialogs: frame.dialog,
          frame,
          frameIndex,
          frames,
          rowNum,
          sceneIndex,
          style,
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
