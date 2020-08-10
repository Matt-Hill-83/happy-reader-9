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

export default function DialogBuilder({ props }) {
  // const [questConfig, setQuestConfig] = useState([])

  const { onSave, world, scene } = props
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
    console.log("dialog", toJS(dialog)) // zzz
    const crittersInFrame = [...critters1, ...critters2]
    const selectedItem = crittersInFrame.find(
      (item) => item.name === dialog.character
    )

    const onChangeCritter = (newValue) => {
      console.log("newValue", toJS(newValue)) // zzz
      dialog.character = newValue
      // const { rowIndex, columnIndex } = tableMeta
      // updateValue(newValue)
      // tableMeta.tableData[rowIndex][columnIndex] = { ...newValue }
      // tableChangeCallback({ tableMeta, newValue, propertyName: "item" })
    }
    crittersInFrame.forEach((item) => {
      console.log("item", toJS(item)) // zzz
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

    const backgroundColor = QuestStatusUtils.getSubQuestColor({
      world: world.data,
      sceneId: scene.id,
    })

    // fakeDivs.push(
    //   <div
    //     className={cx(css.fakeDiv, css.newSceneRow)}
    //     style={backgroundColor}
    //   ></div>
    // )
    // content += `Scene ${sceneIndex}: ===${scene.location.name}===============\n`
    frames.forEach((frame, frameIndex) => {
      console.log("frame.dialog", toJS(frame.dialog)) // zzz
      console.log("frame", toJS(frame)) // zzz
      // insert dummy content between frames.
      fakeDivs.push(
        <div
          className={`${css.fakeDiv} ${
            frameIndex === 0 ? css.newSceneRow : ""
          }`}
          // className={cx(css.fakeDiv, { [frameIndex === 0]: css.newSceneRow })}
          style={backgroundColor}
        >
          {`[${sceneIndex}] - ${scene.location.name}  - F${frameIndex}`}
        </div>
      )
      content += `-------------------\n`
      frame.dialog.forEach((dialog) => {
        if (dialog.text) {
          const newContent = `${dialog.text}\n`
          content += newContent
          fakeDivs.push(
            <div className={css.fakeDiv} style={backgroundColor}>
              <AddDeleteButtonGroup
                props={{
                  // rowIndex: tableMeta.rowIndex,
                  // onDelete: onDeleteTriggerRow,
                  // onAdd: onAddItem,
                  className: css.dialogBuilderButtonGroup,
                  moreButtons: renderCritterPicker({ dialog, frame }),
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

  const dialogBuilderProps = { content, className: css.textEditor }

  return (
    <div className={css.main}>
      <div className={css.controlPanel}>{fakeDivs}</div>
      <MyTextEditor props={dialogBuilderProps}></MyTextEditor>
    </div>
  )
}
