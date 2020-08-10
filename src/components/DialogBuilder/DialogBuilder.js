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

    return (
      <SimpleSelectObj
        className={css.sceneDropdown}
        items={crittersInFrame}
        value={selectedItem}
        getOptionLabel={(option) => _get(option, "name")}
        // onChange={onChangeScene}
      />
    )
  }

  scenes.forEach((scene, sceneIndex) => {
    const frames = _get(scene, "frameSet.frames") || []
    fakeDivs.push(
      <div
        className={cx(css.fakeDiv, css.newSceneRow)}
      >{`===Scene [${sceneIndex}] ===${scene.location.name}===============`}</div>
    )
    content += `=======================\n`
    frames.forEach((frame) => {
      console.log("frame.dialog", toJS(frame.dialog)) // zzz
      console.log("frame", toJS(frame)) // zzz
      // insert dummy content between frames.
      fakeDivs.push(<div className={css.fakeDiv}>-------------------</div>)
      content += `---------------------\n`
      frame.dialog.forEach((dialog) => {
        if (dialog.text) {
          const newContent = `${dialog.text}\n`
          content += newContent
          fakeDivs.push(
            <div className={css.fakeDiv}>
              <AddDeleteButtonGroup
                props={{
                  // rowIndex: tableMeta.rowIndex,
                  // onDelete: onDeleteTriggerRow,
                  // onAdd: onAddItem,
                  className: css.dialogBuilderButtonGroup,
                  moreButtons: renderCritterPicker({ dialog, frame }),
                }}
              />
              {newContent}
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
