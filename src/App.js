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

let store = createStore(combineReducers({ boardReducer }), applyMiddleware(logger, thunk));

let history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="dflex flexcolumn h100">
          <div className="flexshrink">
            sdsasad
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
