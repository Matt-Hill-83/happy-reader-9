import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { FocusStyleManager } from "@blueprintjs/core"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MediaQuery from "react-responsive"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import React from "react"

import WorldBuilder from "./components/WorldBuilder/WorldBuilder"
import TopLevel from "./components/TopLevel/TopLevel"

import localStateStore from "./Stores/LocalStateStore/LocalStateStore.js"
import { maps } from "./Stores/InitStores"

import css from "./App.module.scss"

const worldItem = ({ worldId }) => {
  return `/world/${worldId}`
}

export default function App() {
  FocusStyleManager.onlyShowFocusOnTabs()
  const muiTheme = getMuiTheme()
  const worldId = ":worldId"

  let IS_PROD_RELEASE
  IS_PROD_RELEASE = true
  IS_PROD_RELEASE = false

  localStateStore.setIsProdRelease(IS_PROD_RELEASE)

  maps.fetch()

  return (
    <Router>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {!IS_PROD_RELEASE && (
            <nav>
              <ul>
                <li>
                  <Link to="/">Story Viewer</Link>
                </li>
                <li>
                  <Link to="/world-builder">World Builder</Link>
                </li>
              </ul>
            </nav>
          )}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/world-builder">
              <div className={`${css.App} `}>
                <WorldBuilder />
              </div>
            </Route>
            {/* <Route
              path={worldItem({ worldId })}
              // pass props to force component to remount when route changes
              component={(props) => <StoryViewer {...props} />}
            /> */}
            <Route path={worldItem({ worldId })} component={StoryViewer} />
            <Route path="/">
              <StoryViewer />
            </Route>
          </Switch>
        </div>
      </MuiThemeProvider>
    </Router>
  )
}

function StoryViewer({ match }) {
  return (
    <div className={`${css.App} `}>
      <MediaQuery minDeviceWidth={1224}>
        {/* <div className={css.mediaMsg}>You are a desktop</div> */}
        {/* set global css vars thru class */}
        <TopLevel className={css.desktop} match={match} />
        {/* <TopLevel className={css.mobile} /> */}
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        {/* <div className={css.mediaMsg}>You are a tablet or mobile phone</div> */}
        <MediaQuery orientation="portrait">
          <TopLevel className={css.mobilePortrait} />
          {/* <div className={css.mediaMsg}>
              You are in portrait view. Please Rotate Screen.
            </div> */}
        </MediaQuery>
        <MediaQuery orientation="landscape">
          <TopLevel className={css.mobileLandscape} />
          {/* <div className={css.mediaMsg}>You are landscape</div> */}
        </MediaQuery>
      </MediaQuery>
    </div>
  )
}
