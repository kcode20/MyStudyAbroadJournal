'use strict'
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import User from './components/User';
import App from './components/App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {onAuthChange} from './reducers/auth';
//import {whoami} from './reducers/auth';
import * as firebase from 'firebase';

//The firebase console configuration
  var config = {
    apiKey: "AIzaSyB8CcDpWl2ic6Vj-IO2oJ0DCofEtCFJIn8",
    authDomain: "my-study-abroad-1478796117537.firebaseapp.com",
    databaseURL: "https://my-study-abroad-1478796117537.firebaseio.com",
    storageBucket: "my-study-abroad--1478796117537.appspot.com",
    messagingSenderId: "56381765074"
  };
  firebase.initializeApp(config);

/* When you enter the user component, pass it the currently logged in user*/
const enterUser = (nextState) => {
  store.dispatch(onAuthChange());
}


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/login" />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/user" component={User} onEnter={enterUser}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)