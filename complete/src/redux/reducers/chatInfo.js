/*
{
  fetching: <boolean>
  error: <string or null>
  currentChat: <string or null>,
  chatOrder: <array of strings>
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
*/
import * as c from '../constants'

const initState = {
  fetching: false,
  error: null,
  currentChat: null,
  chatOrder: [],
  chats: {}
}

export default function reducer(state = initState, action) {
  switch (action.type) {
  case c.REQUEST_CHATS:
    return Object.assign({}, state, {
      fetching: true,
      error: null
    });
  case c.REQUEST_CHATS_FAILURE:
    return Object.assign({}, state, {
      fetching: false,
      error: action.err
    });
  case c.CHATS_RECIEVED:
    return {
      fetching: false,
      error: null,
      currentChat: action.chatOrder[0],
      chatOrder: action.chatOrder,
      chats: action.chats
    }

  }
  return state;
}
