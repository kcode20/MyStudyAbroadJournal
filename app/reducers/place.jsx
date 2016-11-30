import axios from 'axios';
import Promise from 'bluebird';

//---------------------------------------REDUCER-------------------------------//
const reducer = (state=null, action) => {
  switch(action.type) {
  case UPDATE_PLACE:
    return action.place 
  case GET_PLACE:
    return action.place 
  }
  return state
}

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
export const getPlaceAsync = function (placeId) {    //how to get the place of a logged in user. 
  return function (dispatch) { 
    fetch('/api/place/' + placeId)
      .then(user => user.json())
      .then(place => { 
        console.log("I am gonna run place right now!!", place)
        return dispatch(update(place))
      })
      .then(() => { console.log("update place done!!!! --------")})
      .catch(err => console.error(err));
  };
};


export const updateAsync = (place) =>
  dispatch =>
   dispatch(update(place));    



export default reducer