import React, { Component } from "react";

import Header from "./navigation/header";
import NavigationContainer from "./navigation/navigation-container";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <NavigationContainer />
        <h1>Lets build a eCommerce</h1>
      </div>
    );
  }
}
