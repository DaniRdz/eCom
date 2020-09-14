import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from "./navigation/header";
import NavigationContainer from "./navigation/navigation-container";
import SignIn from "./sign-in";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <NavigationContainer />
          <Switch>
            <Route exact path="/" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
