import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { FocusStyleManager } from "@blueprintjs/core"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MediaQuery from "react-responsive"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import React from "react"
import { toJS } from "mobx"

import WorldBuilder from "./components/WorldBuilder/WorldBuilder"
import TopLevel from "./components/TopLevel/TopLevel"
import localStateStore from "./Stores/LocalStateStore/LocalStateStore.js"
import { maps, gameConfig } from "./Stores/InitStores"

import css from "./App.module.scss"

const worldItem = ({ worldId }) => {
  return `/world/${worldId}`
}
const defaultWorldInProd = "aH5MjGenT8svEaPaty7G"
const defaultWorldInNonProd = "ZNWZqpZeX88vCBPlSzmn"
// const defaultWorldInNonProd = "aH5MjGenT8svEaPaty7G"

export default function App() {
  FocusStyleManager.onlyShowFocusOnTabs()
  const muiTheme = getMuiTheme()
  const worldId = ":worldId"

  let IS_PROD_RELEASE
  IS_PROD_RELEASE = true
  IS_PROD_RELEASE = false

  localStateStore.setIsProdRelease(IS_PROD_RELEASE)

  const isProdRelease = localStateStore.getIsProdRelease()

  const defaultWorldId = isProdRelease
    ? defaultWorldInProd
    : defaultWorldInNonProd

  localStateStore.setDefaultWorldId(defaultWorldId)

  maps.fetch()
  gameConfig.fetch()
  // console.log("gameConfig", toJS(gameConfig)) // zzz
  // console.log("maps", toJS(maps)) // zzz
  // gameConfig.add({ test: 5 })

  const nav = IS_PROD_RELEASE ? null : (
    <nav className={`${css.nav}`}>
      <ul>
        <li>
          <Link to="/">Story Viewer</Link>
        </li>
        <li>
          <Link to="/world-builder">World Builder</Link>
        </li>
      </ul>
    </nav>
  )

  return (
    <Router>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {nav}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/world-builder">
              <div className={`${css.main} `}>
                <WorldBuilder />
              </div>
            </Route>

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
    <div className={`${css.main} `}>
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
