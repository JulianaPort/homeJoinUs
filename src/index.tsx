import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={App} />
    </Switch>
  </ Router>,
  document.getElementById('root')
);


