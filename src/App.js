import { FocusStyleManager } from "@blueprintjs/core"
import MainStory from "./components/MainStory/MainStory"
import MediaQuery from "react-responsive"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import React from "react"
// import this last
import { UserConfigStore } from "./Stores/UserConfigStore"
import css from "./App.module.scss"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import {
  useParams,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"
import WorldBuilder from "./components/WorldBuilder/WorldBuilder"

const routeTest = ({ worldId }) => {
  console.log("test-----------------") // zzz
  return `/world/${worldId}`
}

export default function App() {
  FocusStyleManager.onlyShowFocusOnTabs()
  const muiTheme = getMuiTheme()
  const worldId = ":worldId"

  return (
    <Router>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Story Viewer</Link>
              </li>
              <li>
                <Link to="/main">World Builder</Link>
              </li>
              <li>
                <Link to="/world/1">item detail</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/main">
              <WorldBuilder />
            </Route>
            <Route path={routeTest({ worldId })} component={StoryViewer} />
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
  console.log("match----StoryViewer", match) // zzz
  return (
    <div className={`${css.App} `}>
      <MediaQuery minDeviceWidth={1224}>
        {/* <div className={css.mediaMsg}>You are a desktop</div> */}
        {/* set global css vars thru class */}
        <MainStory className={css.desktop} match={match} />
        {/* <MainStory className={css.mobile} /> */}
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        {/* <div className={css.mediaMsg}>You are a tablet or mobile phone</div> */}
        <MediaQuery orientation="portrait">
          <MainStory className={css.mobilePortrait} />
          {/* <div className={css.mediaMsg}>
              You are in portrait view. Please Rotate Screen.
            </div> */}
        </MediaQuery>
        <MediaQuery orientation="landscape">
          <MainStory className={css.mobileLandscape} />
          {/* <div className={css.mediaMsg}>You are landscape</div> */}
        </MediaQuery>
      </MediaQuery>
    </div>
  )
}
