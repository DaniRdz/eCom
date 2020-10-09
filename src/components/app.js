import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Header from "./navigation/header";
import NavigationContainer from "./navigation/navigation-container";
import SignIn from "./auth/sign-in";
import SignUp from "./auth/sign-up";
import Account from "./account/account";
import Shop from "./shop/shop";
import Review from "./order/review";
import Payment from "./information/payment";
import Shipping from "./information/shipping";

import history from "../history";

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
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/order/review" component={Review} />
            <Route exact path="/information/shipping" component={Shipping} />
            <Route exact path="/information/payment" component={Payment} />
          </Switch>
        </Router>
      </div>
    );
  }
}
