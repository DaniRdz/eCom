import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from "./navigation/header";
import NavigationContainer from "./navigation/navigation-container";
import SignIn from "./auth/sign-in";
import SignUp from "./auth/sign-up";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <NavigationContainer />
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/Signup" component={SignUp} />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
