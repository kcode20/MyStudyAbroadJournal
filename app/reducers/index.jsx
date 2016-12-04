import { combineReducers } from 'redux'
import place from './place'

const rootReducer = combineReducers({
  auth: require('./auth').default,  
  place
})

export default rootReducer
