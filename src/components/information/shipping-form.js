import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";
import OrderSummary from "./oder-summary";

import history from "../../history";

class ShippingForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className}`}>
        <Field
          className="shipping-form-name"
          type="name"
          title="Name"
          placeholder="Name"
          name="name"
          component={FormInput}
        />
        <Field
          className="shipping-form-street"
          type="street"
          title="Street Address"
          placeholder="Street Address"
          name="street"
          component={FormInput}
        />
        <Field
          className="shipping-form-city"
          type="city"
          title="City"
          placeholder="City"
          name="city"
          component={FormInput}
        />
        <Field
          className="shipping-form-state"
          type="state"
          title="State"
          placeholder="State"
          name="state"
          component={FormInput}
        />
        <Field
          className="shipping-form-zipcode"
          type="zipcode"
          title="Zipcode"
          placeholder="Zipcode"
          name="zipcode"
          component={FormInput}
        />
        <div className="shipping-form-line"></div>
        <Field
          className="shipping-form-use-this"
          onClick={() => history.push("/information/payment")}
          type="submit"
          title="Use This Address"
          name="use-this-address"
          component={FormButton}
        />
        <Field
          className="shipping-form-back"
          onClick={() => history.push("/order/review")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
        <OrderSummary className="shipping-form-summary" />
      </form>
    );
  }
}

ShippingForm = reduxForm({
  form: "SignUpForm",
})(ShippingForm);

export default ShippingForm;
