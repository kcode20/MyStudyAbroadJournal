'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import User from './components/User'
import App from './components/App'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {getPlaceAsync} from './reducers/place'
import {whoami} from './reducers/auth'

const getPlace = (nextState, _replace, done) => {
  store.dispatch(whoami())
    .then(()=> done())
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/login" />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/user" component={User} onEnter={getPlace}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)