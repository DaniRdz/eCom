import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormButton } from "../form-fields";
import ReviewProducts from "./review-products";

import history from "../../history";

class ReviewForm extends Component {
  render() {
    const { className, handleSubmit, subtotal } = this.props;
    let tax = 0.16;

    return (
      <form onSubmit={handleSubmit} className={`${className}`}>
        <div className="review-form-legend">
          <div className="review-form-legend-name">Name</div>
          <div className="review-form-legend-quantity">Quantity</div>
          <div className="review-form-legend-price">Price</div>
        </div>
        <ReviewProducts className="review-form-products" />
        <div className="review-form-line"></div>
        <Field
          className="review-form-proceed"
          onClick={() => history.push("/information/shipping")}
          type="submit"
          title="Proceed To Checkout"
          name="proced"
          component={FormButton}
        />
        <Field
          className="review-form-back"
          onClick={() => history.push("/shop")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
        <div className="review-form-details review-details">
          <div className="review-details-subtotal review-detail">
            <div className="review-detail-title">Subtotal</div>
            <div className="review-detail-price">${subtotal}</div>
          </div>
          <div className="review-details-tax review-detail">
            <div className="review-detail-title">Tax</div>
            <div className="review-detail-price">${tax}</div>
          </div>
          <div className="review-details-shipping review-detail">
            <div className="review-detail-title">Shipping</div>
            <div className="review-detail-price">$0.00</div>
          </div>
          <div className="review-details-total review-detail review-detail-green">
            <div className="review-detail-title review-detail-green-title">
              Total
            </div>
            <div className="review-detail-price review-detail-green-title">
              ${tax + subtotal}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ReviewForm = reduxForm({
  form: "RviewForm",
})(ReviewForm);

export default ReviewForm;
