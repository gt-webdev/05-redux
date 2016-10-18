import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {logOut} from '../../redux/actions'

const MainLayout = React.createClass({
  mixins: [ PureRenderMixin ],
  render() {
    return (
      <div>
        <header>
      		<h1>My Message</h1>
          {(() => {if (this.props.userName && this.props.userPicture) { return (
            <div className="user-area">
              <p className="button" onClick={this.props.logOut}>Log Out</p>
              <p>Welcome {this.props.userName}</p>
              <img src={this.props.userPicture} />
            </div>
          )}})()}
      	</header>
        {this.props.children}
      </div>
    );
  }
});

const mapStateToProps = (state) => ({
  userName: state.user.userName,
  userPicture: state.user.userPicture
})

export default connect(
  mapStateToProps,
  {logOut}
)(MainLayout)
