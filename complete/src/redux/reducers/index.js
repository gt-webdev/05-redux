/*
{
  user: <userReducer>,
  availableUsers: <availableUsersReducer>,
  chatInfo: <chatInfo>
}
*/
import { combineReducers } from 'redux'
import user from './user'
import availableUsers from './availableUsers'
import chatInfo from './chatInfo'
import {routerReducer} from 'react-router-redux'

export default combineReducers({
  user,
  availableUsers,
  chatInfo,
  routing: routerReducer
})
