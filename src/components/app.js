import React, { Component } from "react";
import { Router, Switch, Route } from 'react-router-dom';

import Header from "./navigation/header";
import NavigationContainer from "./navigation/navigation-container";
import SignIn from "./auth/sign-in";
import SignUp from "./auth/sign-up";

import history from '../history';
import Account from "./account/account";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history={history}>
          <Header />
          <NavigationContainer />
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/Signup" component={SignUp} />
            <Route exact path="/account" component={Account} />
          </Switch>
        </Router>
      </div>
    );
  }
}
