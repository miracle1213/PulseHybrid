import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css'

import CompletePassword from './pages/Auth/CompleteResetPassword'
import RegisterConfirm from './pages/Confirm/registerConfirm'
import ForgotConfirm from './pages/Confirm/forgotConfirm'
import ConfirmDevice from './pages/Auth/ConfirmDevice'
import ResetPassword from './pages/Auth/ResetPassword'
import PhoneVerify from './pages/Auth/PhoneVerify'
import EmailVerify from './pages/Auth/EmailVerify'
import Forgot from './pages/Auth/ForgotPassword'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import SecurityVerification from './pages/Auth/SecurityVerification'

import Landing from './pages/Landing'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/pulse" />
        </Route>
        <Route exact path="/pulse" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/register/confirm/:jwtToken"
          component={RegisterConfirm}
        />
        <Route
          exact
          path="/security-verification"
          component={SecurityVerification}
        />
        <Route
          exact
          path="/forgot_password/confirm/:jwtToken"
          component={ForgotConfirm}
        />
        <Route exact path="/reset-password" component={Forgot} />
        <Route
          exact
          path="/verification-new-register/mobile"
          component={PhoneVerify}
        />
        <Route
          exact
          path="/verification-new-register/email"
          component={EmailVerify}
        />
        <Route
          exact
          path="/reset-password/password"
          component={ResetPassword}
        />
        <Route exact path="/confirm-new-device" component={ConfirmDevice} />
        <Route exact path="/complete-password" component={CompletePassword} />
      </Switch>
    </Router>
  )
}

export default App
