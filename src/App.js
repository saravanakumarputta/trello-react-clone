import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './App.css';
import BoardContainer from './containers/boardContainer/BoardContainer';
import BoardDetailContainer from './containers/boardDetailContainer/BoardDetailContainer';

let history = createBrowserHistory();

function App() {
  return (
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
  );
}

export default App;
