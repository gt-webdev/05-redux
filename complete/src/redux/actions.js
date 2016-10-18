import * as c from './constants'
import hackRequest from './hackRequest';
import {browserHistory} from 'react-router'

export function createUser(username, password) {
  return (dispatch) => {
    dispatch({
      type: c.CREATE_USER_REQUEST
    });
    hackRequest('createUser', (err, response) => {
      if (err) {
        dispatch({
          type: c.CREATE_USER_FAILURE,
          err: err
        });
      } else {
        dispatch({
          type: c.CREATE_USER_SUCCESS,
          userName: response.userName,
          userPicture: response.userPicture
        });
        browserHistory.push('/message');
      }
    });
  }
}

export function logIn(username, password) {
  // TODO: complete when login page is made
}


export function logOut() {
  browserHistory.push('/signup')
  return {
    type: c.LOG_OUT
  }
}

export function initMessager() {
  return (dispatch, getState) => {
    console.log('init')
    const state = getState()
    if (!state.user.userName) {
      logOut()
    } else {
      dispatch({
        type: c.REQUEST_CHATS
      });
      hackRequest('getChats', (err, response) => {
        if (err) {
          dispatch({
            type: c.REQUEST_CHATS_FAILURE,
            err: err
          });
        } else {
          dispatch({
            type: c.CHATS_RECIEVED,
            chatOrder: response.chatOrder,
            chats: response.chats
          });
          browserHistory.push('/message');
        }
      });
    }
  }
}

export function populateCurrentChats(username) {

}

export function selectChat(friendName) {

}

export function typeMessage(message, friendName) {

}

export function submitMessage(message, friendName) {

}

export function getAvailableUsers() {

}

export function addChat(friendName) {

}
