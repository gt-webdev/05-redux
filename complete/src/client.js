import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers';
import {Provider} from 'react-redux';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from './components/common/MainLayout.jsx'
import Home from './components/home/Home.jsx';
import SignUp from './components/signup/SignUp.jsx';
import Message from './components/message/Message.jsx';

// Put all the things you want to run as soon as the client loads here.
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render((
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route component={ MainLayout }>
        <Route path="/" component={ Home } />
        <Route path="/signup" component={ SignUp } />
        <Route path="/message" component={ Message } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
