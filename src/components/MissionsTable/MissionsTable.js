import { IconNames } from "@blueprintjs/icons"
import _get from "lodash.get"
import { Button, Classes, ButtonGroup } from "@blueprintjs/core"
import { createMuiTheme } from "@material-ui/core/styles"
import { toJS } from "mobx"
import cx from "classnames"
import React, { useEffect, useState } from "react"

import { getSubQuestTableConfigFunc } from "./MissionsTableConfig"
import DataTable3 from "../DataTable3/DataTable3"

import Utils from "../../Utils/Utils"
import Constants from "../../Utils/Constants/Constants"

import css from "./MissionsTable.module.scss"

export default function MissionsTable({ props }) {
  const {
    items,
    saveQuestConfig,
    setQuestConfig,
    dataTableKey,
    questConfig,
  } = props

  useEffect(() => {
    // on mount

    // returned function will be called on component unmount
    return () => {}
  }, [])

  // on change in props
  useEffect(() => {
    // TODO: store correct prop
    setQuestConfig(props.questConfig || {})
  }, [props.questConfig])

  const renderTriggers = ({ items }) => {
    const onAddTriggerRow = ({ rowIndex, before }) => {
      const newElement = Constants.getNewTrigger()
      Utils.addArrayElement({
        newElement,
        before,
        index: rowIndex,
        array: items,
      })

      saveQuestConfig()
    }

    if (items.length === 0) {
      return (
        <Button
          className={css.addTriggerButton}
          icon={IconNames.ADD}
          onClick={() => {
            onAddTriggerRow({ rowIndex: 0, before: false })
          }}
        >
          Add Trigger
        </Button>
      )
    }

    const tableChangeCallback = ({ newValue, tableMeta, propertyName }) => {
      const { rowIndex } = tableMeta
      items[rowIndex][propertyName] = newValue
    }

    const onDeleteTriggerRow = ({ rowIndex }) => {
      Utils.deleteArrayElement({ index: rowIndex, array: items })
      saveQuestConfig()
    }

    const { options, columns } = getSubQuestTableConfigFunc({
      tableChangeCallback,
      onDeleteTriggerRow,
      onAddTriggerRow,
      saveConfig: () => {
        saveQuestConfig()
      },
    })

    const getMuiTheme = () =>
      createMuiTheme({
        overrides: {
          MUIDataTableHeadCell: {
            fixedHeader: {
              display: "none",
            },
          },
          MuiTableCell: {
            root: {},
          },
        },
      })

    return (
      <DataTable3
        key={dataTableKey}
        props={{
          className: css.triggersTable,
          getMuiTheme,
          data: items,
          columns,
          options,
        }}
      />
    )
  }
  if (!questConfig) {
    return null
  }

  return <div className={cx(css.main)}>{renderTriggers({ items })}</div>
}
