import { Button, TextArea } from "@blueprintjs/core"
import React, { Component, useState } from "react"

import cx from "classnames"

import { observer } from "mobx-react"
import { toJS } from "mobx"
import _get from "lodash.get"
import css from "./GetSceneConfig.module.scss"

class GetSceneConfig extends Component {
  state = { text: `{"dumm":5}` }

  onChangeDialog = ({ event, lineIndex }) => {
    const text = event.target.value

    this.setState({ text })
  }

  renderButton = () => {
    return <Button className={cx(css.uploadButton)}>DOWNLOAD JSON</Button>
  }

  formatFramesForExport = ({ frames }) => {
    const newFrames = frames.map((oldFrame) => {
      const newFrame = {
        frameConfig: {
          critters1: oldFrame.critters1,
          critters2: oldFrame.critters2,
          id: oldFrame.id,
          faces: oldFrame.faces,
        },
      }
      const newDialogs = oldFrame.dialog.map((item) => {
        return `{"${item.character}" : "${item.text}"}`
      })

      newFrame.dialogs = newDialogs
      return newFrame
    })

    return newFrames
  }

  render = () => {
    const { world } = this.props
    if (!world) {
      return null
    }
    const scenesGrid = world.newGrid5
    const { questConfig } = world

    const test1 = toJS(scenesGrid)
    console.log({ test1 })
    const newScenesList = []
    test1.forEach((scene) => {
      const oldFrames = scene.frameSet.frames
      const oldFrames2 = scene.frameSet.frames2 || []

      // convert the old frames into the new frames
      const newFrames = this.formatFramesForExport({ frames: oldFrames })
      const newFrames2 = this.formatFramesForExport({ frames: oldFrames2 })

      const newBornScene = {
        title: scene.location.name,
        sceneConfig: {
          id: scene.location.id,
          worldId: world.id,
          worldTitle: world.title,
          coordinates: scene.coordinates,
          isEndScene: scene.isEndScene,
          isStartScene: scene.isStartScene,
          ...scene.sceneConfig,
        },
        frames: newFrames,
        frames2: newFrames2,
        faces: scene.frameSet.faces,
      }

      newScenesList.push(newBornScene)
    })

    const output = {
      title: world.title,
      scenes: newScenesList,
      questConfig,
    }

    const flatJson = JSON.stringify(output)

    return (
      <div className={css.main}>
        {this.renderButton()}
        {flatJson}
        <TextArea
          className={`${css.jsonPaster} }`}
          id="text-input"
          value={flatJson}
        />
      </div>
    )
  }
}

export default observer(GetSceneConfig)
