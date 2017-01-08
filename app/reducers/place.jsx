import * as firebase from 'firebase';
import {database} from '../firebase';
import store from '../store';

//--------------------------------------- PLACE REDUCER-------------------------------//
const reducer = (state=null, action) => {
  switch(action.type) {
  case UPDATE_PLACE:
    return action.place 
  case GET_PLACE:
    return action.place 
  }
  return state
}

export default reducer;
//---------------------------------------ACTION-------------------------------//
const UPDATE_PLACE = 'UPDATE_PLACE'
const GET_PLACE = 'GET_PLACE'
//---------------------------------------ACTION CREATOR-------------------------------//
export const update = place => ({
  type: UPDATE_PLACE, place
})
export const get = place => ({
  type: GET_PLACE, place
})
//---------------------------------------ACTION CREATOR ASYNC (THUNK)-------------------------------//  

//get the place for the user with specified ID from the firebase console
export const getPlaceAsync= (userId) => {
    return firebase.database().ref('/users/'+ userId +'/place').once('value')
      .then(function(snapshot){
        store.dispatch(get(snapshot.val()))
      });
}
//update the place for the user with specified ID to the firebase console
export const setUserPlace=(userId, description, latitude, longitude) =>{
  const userCity=description.slice(0,description.lastIndexOf(','));
  const userCountry=description.slice(description.lastIndexOf(',')+1);
  firebase.database().ref('users/' + userId +'/place').set({
    city: userCity,
    country: userCountry,
    location: {0: latitude, 1: longitude}
  })
  return getPlaceAsync(userId);
}


