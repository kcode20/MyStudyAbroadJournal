import axios from 'axios';
import {getPlaceAsync} from './place';
import * as firebase from 'firebase';

//------------------ Auth Reducer ------------------------//
const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user  
  }
  return state
}

export default reducer;
//------------------- Auth Actions ----------------------//
const AUTHENTICATED = 'AUTHENTICATED'

//------------------- Auth Actions Creators----------------------//
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

//------------------- Auth Async Action Creators (Thunk) ----------------------//
// when the auth changes (login, signup, signout), update the state 
export const onAuthChange= () => 
  dispatch => {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        dispatch(authenticated(firebaseUser))
        }
      else {
        dispatch(authenticated(null))
      }; 
    });
  };

//Login with Firebase then update the state with the user 
export const login = (email, password) => 
  dispatch => {
    console.log("I am going into login this user: ", email, " with this password: ", password)
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((newUser) => {
     return dispatch(authenticated(newUser))
    })
    .catch(failed => dispatch(authenticated(null)));
  }

//Signup a user to firebase then update the state with the user
export const signup = (email, password) => 
  dispatch => 
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((newUser) => {
      console.log('user created?')
     return dispatch(authenticated(newUser))
    })
    .catch(failed => dispatch(authenticated(null)));
     
//Logout with firebase then update the state to be null
export const logout = () =>
  dispatch =>
    firebase.auth().signOut()
      .then(() => dispatch(onAuthChange()))
      

//Gets the currently logged in user. 
export const whoami = function (){
    return firebase.auth().currentUser;
}