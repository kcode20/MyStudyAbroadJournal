'use strict'
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import * as firebase from 'firebase';
import store from './store';
import firebaseApp from './firebase';
import { whoami } from './reducers/auth';
import {getPlaceAsync} from "./reducers/place"

//Components for Routes
import User from './components/User';
import App from './components/App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SignUpInfo from './components/Country';


/* When you enter the user component, pass it the currently logged in user's place*/
const enterUser = (nextState, _replace, done) => {
  getPlaceAsync(whoami().uid).then(() => done());; 
}


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/login" />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/user-info" component={SignUpInfo}/>
        <Route path="/user" component={User} onEnter={enterUser}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)