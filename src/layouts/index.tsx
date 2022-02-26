import React from 'react'
import { Box } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom'
import Header from './Header'
import { useStyles } from './Style'

// swap pages
import Home from 'pages/Home'
import BuySell from 'pages/BuySell'
import Finance from 'pages/Finance'

function Layouts() {
  let match = useRouteMatch()
  const classes = useStyles()

  return (
    <Router>
      <div className={classes.root}>
        <div>
          <Header />
        </div>
        <div className={classes.container}>
          <Switch>
            <Route
              exact
              path={`${match.path}/`}
              render={() => <Redirect to={`${match.path}/home`} />}
            />
            <Route exact path={`${match.path}/home`} component={Home} />
            <Route exact path={`${match.path}/buy`} component={BuySell} />
            <Route exact path={`${match.path}/finance`} component={Finance} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Layouts
