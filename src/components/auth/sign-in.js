import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import SignInForm from "./sign-in-form";
import PageTitle from "../page-title";

class SignIn extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }
  onSubmit = (fields) => {
    this.props.history.push("/account");
    this.props.signIn(fields);
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

SignIn = connect(null, actions)(SignIn);

export default SignIn;
