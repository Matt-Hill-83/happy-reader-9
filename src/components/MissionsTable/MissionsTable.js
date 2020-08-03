import { IconNames } from "@blueprintjs/icons"
import _get from "lodash.get"
import { Button, Classes, ButtonGroup } from "@blueprintjs/core"
import { createMuiTheme } from "@material-ui/core/styles"
import { toJS } from "mobx"
import cx from "classnames"
import React, { useEffect, useState } from "react"

import { getTableConfig } from "./MissionsTableConfig"
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
    scenes,
    worldId,
  } = props

  const allItems = Utils.getAllItemsInScenes({ scenes })

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

  const renderItems = ({ items }) => {
    const onAddItem = ({ rowIndex, before }) => {
      const newElement = Constants.getNewMission()
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
            onAddItem({ rowIndex: 0, before: false })
          }}
        >
          Add Mission
        </Button>
      )
    }

    const tableChangeCallback = ({ newValue, tableMeta, propertyName }) => {
      const { rowIndex } = tableMeta
      items[rowIndex][propertyName] = newValue
      console.log("items", toJS(items)) // zzz
    }

    const onDeleteTriggerRow = ({ rowIndex }) => {
      Utils.deleteArrayElement({ index: rowIndex, array: items })
      saveQuestConfig()
    }

    const { options, columns } = getTableConfig({
      tableChangeCallback,
      onDeleteTriggerRow,
      onAddItem,
      saveConfig: () => {
        saveQuestConfig()
      },
      scenes: scenes,
      itemsToGet: allItems,
    })

    const getMuiTheme = () =>
      createMuiTheme({
        overrides: {
          MUIDataTableHeadCell: {
            fixedHeader: {
              // display: "none",
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
  console.log("items", toJS(items)) // zzz
  return <div className={cx(css.main)}>{renderItems({ items })}</div>
}