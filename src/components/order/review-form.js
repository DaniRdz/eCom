import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";

import history from "../../history";

class ReviewForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${className}`}>
        <div className="review-form-line"></div>
        <Field
          className="review-form-proceed"
          onClick={() => history.push("/account")}
          type="submit"
          title="Proceed To Checkout"
          name="proced"
          component={FormButton}
        />
        <Field
          className="review-form-back"
          onClick={() => history.push("/")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
      </form>
    );
  }
}

ReviewForm = reduxForm({
  form: "RviewForm",
})(ReviewForm);

export default ReviewForm;
