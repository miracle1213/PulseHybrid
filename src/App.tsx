import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css'

import Landing from './pages/Landing'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/pulse" />
        </Route>
        <Route exact path="/pulse" component={Landing} />
      </Switch>
    </Router>
  )
}

export default App
