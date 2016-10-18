const data = {
  createUser: {
    err: null,
    response: {
      userName: 'Jackson',
      userPicture: 'https://scontent-atl3-1.xx.fbcdn.net/t31.0-8/14258178_10154519374929138_7742324087318651322_o.jpg'
    }
  },

  createUserFail: {
    err: 'User already exists',
    response: null
  },

  getChats: {
    err: null,
    response: {
      chatOrder: ["Clayton", "Josh", "Pramod", "Saleh", "Jerry"],
      chats: {
        "Clayton": {
          "userName": "Clayton",
          "userPicture": "public/assets/clayton.jpg",
          "messages": [
            {
              "sender": "me",
              "text": "Hi"
            },
            {
              "sender": "them",
              "text": "It's me Clayton"
            }
          ]
        },
        "Josh": {
          "userName": "Josh",
          "userPicture": "public/assets/josh.jpeg",
          "messages": [
            {
              "sender": "me",
              "text": "Hi"
            },
            {
              "sender": "them",
              "text": "It's me Josh"
            }
          ]
        },
        "Pramod": {
          "userName": "Pramod",
          "userPicture": "public/assets/pramod.jpg",
          "messages": [
            {
              "sender": "me",
              "text": "Hi"
            },
            {
              "sender": "them",
              "text": "It's me Pramod"
            }
          ]
        },
        "Saleh": {
          "userName": "Saleh",
          "userPicture": "public/assets/saleh.png",
          "messages": [
            {
              "sender": "me",
              "text": "Hi"
            },
            {
              "sender": "them",
              "text": "It's me Saleh"
            }
          ]
        },
        "Jerry": {
          "userName": "Jerry",
          "userPicture": "public/assets/jerry.png",
          "messages": [
            {
              "sender": "me",
              "text": "Hi"
            },
            {
              "sender": "them",
              "text": "It's me Jerry"
            }
          ]
        }
      }
    }
  }
}

export default function(key, cb) {
  setTimeout(cb.bind(null, data[key].err, data[key].response), 2000);
}
