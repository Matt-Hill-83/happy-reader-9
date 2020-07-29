import { makeStyles } from "@material-ui/core/styles"
import { toJS } from "mobx"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import cx from "classnames"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import React from "react"
import Typography from "@material-ui/core/Typography"

import css from "./MyAccordian.module.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function MyAccordian({ props }) {
  const { items, className } = props
  const classes = useStyles()

  if (!items || items.length === 0) {
    return null
  }

  const renderedAccordians = items.map((item) => {
    const { title, content, expanded } = item

    return (
      <Accordion expanded={expanded} className={cx(css.main, className)}>
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

  // return renderedAccordians
  return <div className={classes.root}>{renderedAccordians}</div>
}
