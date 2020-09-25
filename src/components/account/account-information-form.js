import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, LongGrayButton } from "../form-fields";

import history from "../../history";

class AccountInformationForm extends Component {
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
        {/* <Field
          className="account-information-form-password"
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
          component={FormInput}
        /> */}
        <Field
          className="account-information-form-change-password"
          onClick={() => console.log('HELLOOOOOOO!!')}
          type="button"
          labelTitle="Password"
          title="Change Password"
          name="change-password"
          component={LongGrayButton}
        />
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: "AccountInformationForm",
})(AccountInformationForm);

export default AccountInformationForm;