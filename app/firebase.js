import * as firebase from 'firebase';

/*
	Firebase application for authentication, realtime database, hosting, and storage
*/

//the firebase console configuration 
const config = {
  apiKey: "AIzaSyB8CcDpWl2ic6Vj-IO2oJ0DCofEtCFJIn8",
  authDomain: "my-study-abroad-1478796117537.firebaseapp.com",
  databaseURL: "https://my-study-abroad-1478796117537.firebaseio.com",
  storageBucket: "my-study-abroad--1478796117537.appspot.com",
  messagingSenderId: "56381765074"
};

//initialization of our firebase app
export default firebase.initializeApp(config);

//the realtime database from our firebase app
export const database= firebase.database(); 

