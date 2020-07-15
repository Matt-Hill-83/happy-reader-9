import { FocusStyleManager } from "@blueprintjs/core"
import MainStory from "./components/MainStory/MainStory"
import MediaQuery from "react-responsive"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import React from "react"
// import this last
import { UserConfigStore } from "./Stores/UserConfigStore"
import css from "./App.module.scss"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import WorldMaker from "./components/WorldMaker/WorldMaker"
import WorldBuilder from "./components/WorldBuilder/WorldBuilder"

export default function App() {
  FocusStyleManager.onlyShowFocusOnTabs()
  const muiTheme = getMuiTheme()

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">StoryViewer</Link>
            </li>
            <li>
              <Link to="/about">WorldMaker</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <MuiThemeProvider muiTheme={muiTheme}>
              <WorldBuilder />
            </MuiThemeProvider>
          </Route>
          <Route path="/users">
            <WorldMaker />
          </Route>
          <Route path="/">
            <StoryViewer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function StoryViewer() {
  FocusStyleManager.onlyShowFocusOnTabs()
  const muiTheme = getMuiTheme()

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className={`${css.App} `}>
        <MediaQuery minDeviceWidth={1224}>
          {/* <div className={css.mediaMsg}>You are a desktop</div> */}
          {/* set global css vars thru class */}
          <MainStory className={css.desktop} />
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
    </MuiThemeProvider>
  )
}

// function WorldMaker() {
//   return <h2>WorldMaker</h2>
// }

function Users() {
  return <h2>Users</h2>
}

// function App() {
//   // Disable accessibility focus
//   FocusStyleManager.onlyShowFocusOnTabs()
//   const muiTheme = getMuiTheme()

//   return (
//     <MuiThemeProvider muiTheme={muiTheme}>
//       <div className={`${css.App} `}>
//         <MediaQuery minDeviceWidth={1224}>
//           {/* <div className={css.mediaMsg}>You are a desktop</div> */}
//           {/* set global css vars thru class */}
//           <MainStory className={css.desktop} />
//           {/* <MainStory className={css.mobile} /> */}
//         </MediaQuery>
//         <MediaQuery maxDeviceWidth={1224}>
//           {/* <div className={css.mediaMsg}>You are a tablet or mobile phone</div> */}
//           <MediaQuery orientation="portrait">
//             <MainStory className={css.mobilePortrait} />
//             {/* <div className={css.mediaMsg}>
//               You are in portrait view. Please Rotate Screen.
//             </div> */}
//           </MediaQuery>
//           <MediaQuery orientation="landscape">
//             <MainStory className={css.mobileLandscape} />
//             {/* <div className={css.mediaMsg}>You are landscape</div> */}
//           </MediaQuery>
//         </MediaQuery>
//       </div>
//     </MuiThemeProvider>
//   )
// }

// export default App
