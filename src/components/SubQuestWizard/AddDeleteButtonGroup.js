import { Button, ButtonGroup, Popover, Classes } from "@blueprintjs/core"
import { IconNames } from "@blueprintjs/icons"
import { toJS } from "mobx"
import cx from "classnames"
import React from "react"
import TextField from "@material-ui/core/TextField"

import Utils from "../../Utils/Utils"
import SimpleSelectObj from "../SimpleSelectObj/SimpleSelectObj"
import Constants from "../../Utils/Constants/Constants"

import css from "./SubQuestTableConfig.module.scss"

export default function AddDeleteButtonGroup({ props }) {
  const { rowIndex, onDelete, onAdd, title = "" } = props

  return (
    <ButtonGroup className={cx(Classes.ALIGN_LEFT, css.buttonGroup)}>
      <Popover
        interactionKind={"HOVER"}
        content={
          <ButtonGroup
            vertical={true}
            className={cx(Classes.ALIGN_LEFT, css.buttonGroup)}
          >
            <Button
              onClick={() =>
                onAdd({
                  rowIndex,
                  before: true,
                })
              }
              icon={IconNames.ADD}
            />
            <Button
              onClick={() => onDelete({ rowIndex })}
              icon={IconNames.TRASH}
            />
            <Button
              onClick={() =>
                onAdd({
                  rowIndex,
                  before: false,
                })
              }
              icon={IconNames.ADD}
            />
          </ButtonGroup>
        }
      >
        <Button icon={IconNames.SETTINGS} />
      </Popover>
      {title}
    </ButtonGroup>
  )
}