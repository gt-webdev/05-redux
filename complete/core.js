/*
{
  user: {
    fetching:
    error:
    userName: 'name',
    userPicture: 'url'
  }
  chatInfo: {
    fetching:
    error:
    currentChat: username
    chatOrder: [
      'friendName'
    ],
    chats: {
      'usernameKey': {
        userName: 'name',
        userPicture: 'url',
        messages: [
          {
            "sender": "me",
            "text": "Hi"
          },
          {
            "sender": "them",
            "text": "It's me Clayton"
          }
        ],
        messageBox: 'curmessage'
      }
    }
  }
  availableusers: {
    fetching:
    error:
    users: [
      'username'
    ]
  }
}
*/
/*
createUser(username, password)
logIn(username, password)
logOut()
populateCurrentChats(username)
selectChat(friendName)
typeMessage(message, friendName)
submitMessage(message, friendName)
getAvailableUsers()
addChat(friendName)
*/

import hackRequest from './hackRequest'

export const INITIAL_STATE = {
  waitingOn: {
    login: false,
    fetchCurrentChat: false,
    fetchAvailableUsers: false
  }
  failure: {
    login: null,
    fetchCurrentChat: null,
    fetchAvailableUsers: null
  }
  userName: null,
  userPicture: null,
  currentChat: null,
  chatOrder: [],
  chats: {},
  availableusers: {}
}

export function createUser(username, password) {
  hackRequest('login', (err, response) => {

  })
}

export function logIn(username, password) {

}

export function logOut() {

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
