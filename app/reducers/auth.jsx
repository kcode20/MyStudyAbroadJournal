import axios from 'axios'
import {getPlaceAsync} from './place'

const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user  
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const signup = (name, email, password) => 
  dispatch => 
    axios.post('/api/users', {name, email, password})
    .then((newUser) => {
      dispatch(login(newUser.data.email, newUser.data.password))
    })
    .catch(failed => dispatch(authenticated(null)));

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/local/login',
      {username, password})
      .then(() => {
         return dispatch(whoami())
       })
      .catch(() => dispatch(whoami()))      

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        return dispatch(authenticated(user))
      })
      .then(thunk => {
        dispatch(getPlaceAsync(thunk.user.place_id))
      })
      .catch(failed => dispatch(authenticated(null)))

export default reducer