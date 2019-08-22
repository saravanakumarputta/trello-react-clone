import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import './App.css';
import BoardContainer from './containers/boardContainer/BoardContainer';
import BoardDetailContainer from './containers/boardDetailContainer/BoardDetailContainer';

import boardReducer from './reducers/BoardReducer';
import listReducer from './reducers/ListReducer';
import cardReducer from './reducers/CardReducer';
import commentReducer from './reducers/CommentReducer';

let store = createStore(combineReducers({ boards: boardReducer, lists: listReducer, cards: cardReducer, comments: commentReducer }), applyMiddleware(logger, thunk));

let history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="dflex flexcolumn h100">
          <div className="flexshrink">
            <div className="dflex flexrow alignVertical marginLR20">
              <div className="flexgrow">
                <div className="dflex flexrow">
                  <div className="headerMenu"><Link to="/">Home</Link></div>
                  <div className="headerMenu"><Link to="/boards">Boards</Link></div>
                </div>
              </div>
              <div className="flexshrink">
                <img src="https://avatars2.githubusercontent.com/u/19649856?s=460&v=4" className="userImg" alt="user Name" />
              </div>
            </div>
          </div>
          <div className="flexgrow">
            <Switch>
              <Route exact path='/' component={BoardContainer}></Route>
              <Route exact path='/boards' component={BoardContainer}></Route>
              <Route exact path='/boards/:id' component={BoardDetailContainer}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
