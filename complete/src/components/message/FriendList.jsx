import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


const FriendList = React.createClass({
  mixins: [ PureRenderMixin ],
  render() {
    return (
      <ul className="user-pane">
        {this.props.friends.map((friend) => {
          return (
            <li className={(this.props.curChat === friend.id) ? 'selected' : ''}
                key={friend.id}>
              <img className="profile-image" src={friend.userPicture} />{friend.userName}
            </li>
          );
        })}
  		</ul>
    );
  }
});

export default FriendList;
