import React from 'react';
import {connect} from 'react-redux';

import hackData from 'json!./hackData.json'
import FriendList from './FriendList.jsx';
import MessageArea from './MessageArea.jsx'

import {initMessager} from '../../redux/actions'

const Message = React.createClass({
  componentWillMount: function() {
    this.props.initMessager();
  },
  render() {
    if (this.props.fetching) {
      return (<h1>Loading...</h1>)
    }
    return (
      <div className="message-content">
    		<FriendList
            curChat = {this.props.curChat}
            friends={ this.props.chatOrder.map((key) => {
              let data = this.props.chats[key];
              data.id = key;
              return data;
            })}/>
          {/*<MessageArea messageList={this.state.data[this.state.currentSelected].messages}
              onNewMessage={this.onNewMessage} />*/}
    	</div>
    );
  }
});

const mapStateToProps = (state) => ({
  fetching: state.chatInfo.fetching,
  chats: state.chatInfo.chats,
  curChat: state.chatInfo.currentChat,
  chatOrder: state.chatInfo.chatOrder
})

export default connect(
  mapStateToProps,
  {initMessager}
)(Message)
