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

export default function DialogBuilder({ props }) {
  // const [questConfig, setQuestConfig] = useState([])

  const { saveItems, world } = props
  const scenes = _get(world, "data.newGrid5") || []

  useEffect(() => {
    // on mount

    // returned function will be called on component unmount
    return () => {}
  }, [])

  // on change in props
  useEffect(() => {
    // TODO: store correct prop
    // setQuestConfig(props.questConfig || {})
  }, [props.questConfig])

  const dataParts = {
    content: "",
    fakeDivs: [],
  }

  const renderCritterPicker = ({ dialog, frame }) => {
    const { critters1, critters2 } = frame
    const crittersInFrame = [...critters1, ...critters2]
    const selectedItem = crittersInFrame.find(
      (item) => item.name === dialog.character
    )

    const onChangeCritter = (newValue) => {
      dialog.character = newValue.name
      saveItems()
    }

    // crittersInFrame.forEach((item) => {})

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

  let rowNum = { value: 0 }
  const rowRecords = []

  const addNewRow = ({ text, fakeDiv, rowNum, dataParts }) => {
    dataParts.fakeDivs.push(fakeDiv)
    dataParts.content += `${text}\n`
    rowNum.value++
  }

  scenes.forEach((scene, sceneIndex) => {
    const frames = _get(scene, "frameSet.frames") || []

    const colors = Constants.subQuestColors
    const colorIndex = sceneIndex % colors.length
    const backgroundColor = colors[colorIndex]
    const style = {
      "background-color": `#${backgroundColor}`,
    }

    frames.forEach((frame, frameIndex) => {
      // insert dummy content between frames.
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

      addNewRow({ text, fakeDiv, rowNum, dataParts })

      console.log("rowNum.value", rowNum.value) // zzz

      frame.dialog.forEach((dialog, dialogIndex) => {
        if (dialog.text) {
          const metaInfo = `==>${sceneIndex}---${frameIndex}---${dialogIndex}<==`

          const text = `${dialog.text} ${metaInfo}`
          // dataParts.content += newContent
          const fakeDiv = (
            <div className={css.fakeDiv} style={style}>
              <AddDeleteButtonGroup
                props={{
                  // rowIndex: tableMeta.rowIndex,
                  // onDelete: onDeleteRow,
                  // onAdd: onAddRow,
                  vertical: false,
                  noPopover: true,
                  className: css.dialogBuilderButtonGroup,
                  moreButtons: renderCritterPicker({ dialog, frame }),
                }}
              />
              <div className={css.emptySpace}></div>
            </div>
          )
          addNewRow({ text, fakeDiv, rowNum, dataParts })
        }
      })
    })
  })

  const onSubmit = ({ content }) => {
    const linesArray = content.split("\n")

    linesArray.slice(0.5).forEach((item) => {
      // linesArray.forEach((item) => {
      const reg = new RegExp(/(.*)==>(.+)---(.+)---(.+)<==/)
      const match = item.match(reg)

      if (match) {
        const newText = match[1]
        const sceneIndex = match[2]
        const frameIndex = match[3]
        const dialogIndex = match[4]

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

  const dialogBuilderProps = {
    content: dataParts.content,
    className: css.textEditor,
    onSubmit,
  }

  return (
    <div className={css.main}>
      <div className={css.controlPanel}>{dataParts.fakeDivs}</div>
      <MyTextEditor props={dialogBuilderProps}></MyTextEditor>
    </div>
  )
}
