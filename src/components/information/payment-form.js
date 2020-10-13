import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { FormInput, FormButton } from "../form-fields";
import OrderSummary from "./order-summary";

import history from "../../history";
import { UnderlinedTitle } from "./info-details";

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className}`}>
        <Field
          className="payment-form-name"
          type="name"
          title="Name on Credit Card"
          placeholder="Name"
          name="name"
          component={FormInput}
        />
        <Field
          className="payment-form-card"
          type="card"
          title="Credit Card Number"
          placeholder="____-____-____-____"
          name="card"
          component={FormInput}
        />
        <Field
          className="payment-form-expiration"
          type="expiration"
          title="Expiration Date"
          placeholder="Expiration"
          name="expiration"
          component={FormInput}
        />
        <Field
          className="payment-form-ccv"
          type="ccv"
          title="CCV"
          placeholder="CCV"
          name="ccv"
          component={FormInput}
        />
        <div className="payment-form-line"></div>
        <Field
          className="payment-form-pay-complete"
          onClick={() => history.push("/account")}
          type="submit"
          title="Pay & Complete"
          name="pay-complete"
          component={FormButton}
        />
        <Field
          className="payment-form-back"
          onClick={() => history.push("/information/shipping")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
        <OrderSummary className="payment-form-summary" />
        <div className="payment-form-shipping-info shipping-info">
          <UnderlinedTitle
            className="shipping-info-title"
            title="Shipping To"
          />
          <div className="shipping-info-name small-text">{this.props.name}</div>
          <div className="shippinh-info-address small-text">
            {this.props.address}
          </div>
        </div>
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "SignUpForm",
})(PaymentForm);

function mapStateToProps(state) {
  const { name, address } = state.user.user;
  return { name, address };
}

PaymentForm = connect(mapStateToProps)(PaymentForm);

export default PaymentForm;
