import { makeStyles } from "@material-ui/core/styles"
import { toJS } from "mobx"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import cx from "classnames"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import React, { useState, useEffect } from "react"
import Typography from "@material-ui/core/Typography"

import css from "./MyAccordion.module.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function MyAccordion({ props }) {
  // const { accordion, className } = props
  const { title, content, className = "" } = props
  const classes = useStyles()
  const [expanded, setExpanded] = useState([])

  useEffect(() => {
    return
  }, [props.expanded])

  useEffect(() => {
    // on mount
    setExpanded(props.expanded)
    // returned function will be called on component unmount
    return () => {
      return null
    }
  }, [])

  const onChange = (event) => {
    console.log("event", toJS(event)) // zzz
    setExpanded(!expanded)
    props.onChange && props.onChange()
  }

  const renderedAccordion = (
    <Accordion
      defaultExpanded={expanded}
      className={cx(className)}
      onChange={onChange}
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

  // return renderedAccordion
  return renderedAccordion
}
