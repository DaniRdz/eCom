import React, { Component } from "react";

import SignInForm from "./sign-in-form";
import PageTitle from "../page-title";

export default class SignIn extends Component {
  onSubmit = (fields) => {
    console.log(fields);
  };

  render() {
    return (
      <div className="sign-in">
        <PageTitle className="sign-in-page-title" title="Login" />
        <SignInForm onSubmit={this.onSubmit} className="sign-in-form" />
      </div>
    );
  }
}
