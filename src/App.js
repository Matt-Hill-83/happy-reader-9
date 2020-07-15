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

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
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

function About() {
  return <h2>About</h2>
}

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
