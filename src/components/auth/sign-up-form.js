import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";
import Details from "../details";

import history from "../../history";

class SignUpForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        id: 0,
        title: "Not registered? Create account here",
        onClick: () => history.push("/Signup"),
      },
      {
        id: 1,
        title: "Forgot account email?",
        onClick: () => console.log("forgot email"),
      },
      {
        id: 2,
        title: "Forgot password?",
        onClick: () => console.log("forgot password"),
      },
    ];
    return (
      <form onSubmit={handleSubmit} className={`${className}`}>
        <Field
          className="sign-up-form-email"
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="sign-up-form-name"
          type="name"
          title="Name"
          placeholder="Name"
          name="name"
          component={FormInput}
        />
        <Field
          className="sign-up-form-password"
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
          component={FormInput}
        />
        <Field
          className="sign-up-form-confirm"
          type="password"
          title="Confirm Password"
          placeholder="Comfirm Password"
          name="confirm"
          component={FormInput}
        />
        <div className="sign-up-form-line"></div>
        <Field
          className="sign-up-form-login"
          onClick={() => console.log("tryna submit")}
          type="submit"
          title="Login"
          name="login"
          component={FormButton}
        />
        <Field
          className="sign-up-form-back"
          onClick={() => console.log("it's alive!!!!")}
          type="button"
          title="Back"
          name="back"
          short={true} 
          component={FormButton}
        />
        <Details
          className="sign-up-form-details"
          title="QuickLinks"
          links={links}
        />
      </form>
    );
  }
}

SignUpForm = reduxForm({
  form: "SignUpForm",
})(SignUpForm);

export default SignUpForm;
