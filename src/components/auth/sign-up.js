import React, { Component } from "react";

import SignUpForm from "./sign-up-form";
import PageTitle from "../page-title";

export default class SignUp extends Component {
  onSubmit = (fields) => {
    console.log(fields);
  };

  render() {
    return (
      <div className="sign-in">
        <PageTitle className="sign-in-page-title" title="Register" />
        <SignUpForm onSubmit={this.onSubmit} className="sign-in-form" />
      </div>
    );
  }
}