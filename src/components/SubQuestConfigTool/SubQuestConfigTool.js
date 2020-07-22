import React, { useEffect } from "react"
import cx from "classnames"
import { Button, Classes, ButtonGroup } from "@blueprintjs/core"
import MiniTable2 from "../MiniTable2/MiniTable2"
import { toJS } from "mobx"

import "jsoneditor/dist/jsoneditor.css"
import css from "./SubQuestConfigTool.module.scss"
import MUIDataTable from "mui-datatables"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

export default function SubQuestConfigTool({ props }) {
  const [items, setItems] = React.useState([])

  const onChange = (items) => {
    setItems(items)
    props.onChangeJSON && props.onChangeJSON()
  }

  useEffect(() => {
    // on mount
    console.log("mounted") // zzz

    // returned function will be called on component unmount
    return () => {
      console.log("unmounted") // zzz
    }
  }, [])

  // on change in props
  useEffect(() => {
    setItems(props.items)
  }, [props.items])

  const renderScenes = ({ scenes }) => {
    return scenes.map((scene) => {
      return (
        <div className={cx(css.sceneName, css.listItem)}>
          <span className={cx(css.listItemName)}>{scene.name}</span>
        </div>
      )
    })
  }

  // hack to hide toolbar
  const getMuiTheme = () =>
    createMuiTheme({ overrides: { MuiToolbar: { root: { display: "none" } } } })

  const renderTriggers = ({ triggers }) => {
    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "vertical",
      enableNestedDataAccess: ".",
      customToolbar: null,
      // filter: false,
      search: false,
      print: false,
      download: false,
      viewColumns: false,
      customToolbar: null,
      responsive: "vertical",
    }

    const columns = [
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
        },
      },
      {
        name: "conditions",
        label: "Conditions",
        options: {
          filter: true,
          filterType: "multiselect",
          customBodyRender: (value, tableMeta, updateValue) => {
            return value.map((condition) => {
              const keys = Object.keys(condition)
              return keys.map((key) => <div>{`${key}: ${condition[key]}`}</div>)
            })
          },
        },
      },
      {
        name: "Delete",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRenderLite: (dataIndex) => {
            return (
              <button
                onClick={() => {
                  const { data } = this.state
                  data.shift()
                  this.setState({ data })
                }}
              >
                Delete
              </button>
            )
          },
        },
      },
      {
        name: "Edit",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRenderLite: (dataIndex, rowIndex) => {
            return (
              <button
                onClick={() =>
                  window.alert(
                    `Clicked "Edit" for row ${rowIndex} with dataIndex of ${dataIndex}`
                  )
                }
              >
                Edit
              </button>
            )
          },
        },
      },
      {
        name: "Add",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRenderLite: (dataIndex) => {
            return (
              <button
              // onClick={() => {
              //   const { data } = this.state
              //   data.unshift([
              //     "Mason Ray",
              //     "Computer Scientist",
              //     "San Francisco",
              //     39,
              //     "$142,000",
              //   ])
              //   this.setState({ data })
              // }}
              >
                Add
              </button>
            )
          },
        },
      },
    ]

    return <MUIDataTable data={triggers} columns={columns} options={options} />
  }

  const renderedItems = props.items.map((subQuest) => {
    const renderedScenes = renderScenes({ scenes: subQuest.scenes })
    const renderedTriggers = renderTriggers({ triggers: subQuest.triggers })

    return (
      <div className={cx(css.subQuest, css.listGroup)}>
        {subQuest.name}
        <div className={cx(css.scenes, css.listGroup)}>
          <span className={cx(css.listGroupTitle)}>Scenes</span>
          {renderedScenes}
        </div>
        <div className={cx(css.triggers, css.listGroup)}>
          <span className={cx(css.listGroupTitle)}>Triggers</span>
          {renderedTriggers}
        </div>
      </div>
    )
  })

  return (
    <div className={cx(css.main)}>
      <div className={cx(css.content)}>{renderedItems}</div>
      <ButtonGroup
        vertical={false}
        className={cx(Classes.ALIGN_LEFT, css.buttonGroup)}
      >
        <Button
          className={css.saveButton}
          onClick={() => props.onSaveJSON({ items })}
        >
          Save Changes
        </Button>
        <Button
          className={css.saveButton}
          onClick={() => props.onClose && props.onClose()}
        >
          Exit
        </Button>
      </ButtonGroup>
    </div>
  )
}
