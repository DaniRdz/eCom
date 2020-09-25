import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, LongGrayButton } from "../form-fields";

import history from "../../history";

class AccountInformationForm extends Component {
  constructor() {
    super();
    this.state = {
      showPasswords: false,
    };
  }
  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${className}`}>
        <Field
          className="account-information-form-name"
          type="name"
          title="Name"
          placeholder="Name"
          name="name"
          component={FormInput}
        />
        <Field
          className="account-information-form-email"
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="account-information-form-street"
          type="street"
          title="Street Address"
          placeholder="Street Address"
          name="address"
          component={FormInput}
        />
        <Field
          className="account-information-form-city"
          type="city"
          title="City"
          placeholder="City"
          name="city"
          component={FormInput}
        />
        <Field
          className="account-information-form-state"
          type="state"
          title="State"
          placeholder="State"
          name="state"
          component={FormInput}
        />
        <Field
          className="account-information-form-zipcode"
          type="zipcode"
          title="Zipcode"
          placeholder="Zipcode"
          name="zipcode"
          component={FormInput}
        />
        {this.state.showPasswords ? (
          [
            <Field
              key={0}
              className="account-information-form-current"
              type="password"
              title="Current Password"
              placeholder=" Current Password"
              name="current"
              component={FormInput}
            />,
            <Field
              key={1}
              className="account-information-form-new"
              type="password"
              title="New Password"
              placeholder=" New Password"
              name="new"
              component={FormInput}
            />,
            <Field
              key={2}
              className="account-information-form-confirm"
              type="password"
              title="Confirm Password"
              placeholder=" Confirm Password"
              name="Confirm"
              component={FormInput}
            />,
          ]
        ) : (
          <Field
            className="account-information-form-change-password"
            onClick={() => this.setState({ showPasswords: true })}
            type="button"
            labelTitle="Password"
            title="Change Password"
            name="change-password"
            component={LongGrayButton}
          />
        )}
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: "AccountInformationForm",
})(AccountInformationForm);

export default AccountInformationForm;
