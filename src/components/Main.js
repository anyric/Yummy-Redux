import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';


class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/" component={Dashboard} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;
