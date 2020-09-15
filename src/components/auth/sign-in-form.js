import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput } from "../form-fields";

class SignInForm extends Component {
  render() {
    const { className } = this.props;
    return (
      <form className={`${className}`}>
        <Field
          className="sign-in-form-email"
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="sign-in-form-password"
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
          component={FormInput}
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm",
})(SignInForm);

export default SignInForm;
