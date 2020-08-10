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
import QuestStatusUtils from "../../Utils/QuestStatusUtils.js"
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

  let content = ""
  let fakeDivs = []

  const renderCritterPicker = ({ dialog, frame }) => {
    const { critters1, critters2 } = frame
    const crittersInFrame = [...critters1, ...critters2]
    const selectedItem = crittersInFrame.find(
      (item) => item.name === dialog.character
    )

    const onChangeCritter = (newValue) => {
      // console.log("newValue.name", toJS(newValue.name)) // zzz
      dialog.character = newValue.name

      saveItems()
    }
    crittersInFrame.forEach((item) => {
      // console.log("item", toJS(item)) // zzz
    })

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

  scenes.forEach((scene, sceneIndex) => {
    const frames = _get(scene, "frameSet.frames") || []

    const colors = Constants.subQuestColors
    const colorIndex = sceneIndex % colors.length
    const backgroundColor = colors[colorIndex]
    const style = {
      "background-color": `#${backgroundColor}`,
    }

    frames.forEach((frame, frameIndex) => {
      console.log("frame.dialog", toJS(frame.dialog)) // zzz
      console.log("frame", toJS(frame)) // zzz
      // insert dummy content between frames.
      fakeDivs.push(
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
      content += `-------------------\n`
      frame.dialog.forEach((dialog, dialogIndex) => {
        if (dialog.text) {
          const metaInfo = `===>${sceneIndex}---${frameIndex}---${dialogIndex}<==`
          const newContent = `${dialog.text} ${metaInfo}\n`
          content += newContent
          fakeDivs.push(
            <div className={css.fakeDiv} style={style}>
              {/* {renderCritterPicker({ dialog, frame })} */}
              <AddDeleteButtonGroup
                props={{
                  // rowIndex: tableMeta.rowIndex,
                  // onDelete: onDeleteTriggerRow,
                  // onAdd: onAddItem,
                  vertical: false,
                  noPopover: true,
                  className: css.dialogBuilderButtonGroup,
                  moreButtons: renderCritterPicker({ dialog, frame }),
                  // moreNestedButtons: renderCritterPicker({ dialog, frame }),
                }}
              />
              <div className={css.emptySpace}></div>
              {/* {newContent} */}
            </div>
          )
        }
      })
    })
  })

  const onSubmit = ({ content }) => {
    // console.log("content", toJS(content)) // zzz
    const linesArray = content.split("\n")

    linesArray.slice(0.5).forEach((item) => {
      // linesArray.forEach((item) => {
      const reg = new RegExp(/(.*)===>(.+)---(.+)---(.+)<==/)
      // const reg = new RegExp(/==>/)
      const match = item.match(reg)
      // console.log("match", toJS(match)) // zzz

      if (match) {
        console.log("match", match) // zzz
        const newText = match[1]
        const sceneIndex = match[2]
        const frameIndex = match[3]
        const dialogIndex = match[4]

        const scene = scenes[sceneIndex]
        // console.log("scene", toJS(scene)) // zzz
        const frames = _get(scene, "frameSet.frames") || []
        const frame = frames[frameIndex]
        console.log("frame", toJS(frame)) // zzz
        const dialog = frame.dialog[dialogIndex]
        console.log("") // zzz
        console.log("") // zzz
        console.log("dialog.text", toJS(dialog.text)) // zzz
        console.log("newText", newText) // zzz

        if (dialog !== newText) {
          frame.dialog[dialogIndex].text = newText
        }
      }
    })
    saveItems()
  }

  const dialogBuilderProps = { content, className: css.textEditor, onSubmit }

  return (
    <div className={css.main}>
      {/* <Button onClick={() => onSubmit({})} icon={IconNames.SAVED} /> */}
      <div className={css.controlPanel}>{fakeDivs}</div>
      <MyTextEditor props={dialogBuilderProps}></MyTextEditor>
    </div>
  )
}
