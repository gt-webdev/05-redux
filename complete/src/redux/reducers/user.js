/*
{
  fetching: <boolean>
  error: <string or null>
  userName: <string or null>,
  userPicture: <string (url) or null>
}
*/
import * as c from '../constants'

const initState = {
  fetching: false,
  error: null,
  userName: null,
  userPicture: null
}

export default function reducer(state = initState, action) {
  switch (action.type) {
  case c.CREATE_USER_REQUEST:
    return Object.assign({}, state, {
      fetching: true,
      error: null
    });
  case c.CREATE_USER_FAILURE:
    return Object.assign({}, state, {
      fetching: false,
      error: action.err
    });
  case c.CREATE_USER_SUCCESS:
    return {
      fetching: false,
      error: null,
      userName: action.userName,
      userPicture: action.userPicture
    }
  case c.LOG_OUT:
    return initState
  }
  return state;
}
