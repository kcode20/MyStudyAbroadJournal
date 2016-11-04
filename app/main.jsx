'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import App from './components/App'
import Login from './components/Login'

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/jokes" />
        <Route path="/login" component={Login}/>
        <Route path="/jokes" component={Jokes} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)