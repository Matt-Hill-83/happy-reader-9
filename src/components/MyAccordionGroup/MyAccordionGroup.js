import { makeStyles } from "@material-ui/core/styles"
import { toJS } from "mobx"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import cx from "classnames"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"

import css from "./MyAccordionGroup.module.scss"
import MyAccordion from "../MyAccordion/MyAccordion"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function MyAccordionGroup({ props }) {
  const { items, className } = props
  const classes = useStyles()

  if (!items || items.length === 0) {
    return null
  }

  const renderedAccordion = items.map((item) => {
    const { title, content, expanded } = item

    return <MyAccordion props={{ ...item }}></MyAccordion>
    return (
      <Accordion
        // className={cx(css.xxmain, className)}
        defaultExpanded={expanded}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={cx(classes.heading, css.header)}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={css.content}>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    )
  })

  // return renderedAccordion
  return (
    <div className={cx(classes.root, css.main, className)}>
      {renderedAccordion}
    </div>
  )
}
