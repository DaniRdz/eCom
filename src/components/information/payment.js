import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import PageTitle from "../page-title";

class Payment extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }
  onSubmit = (fields) => {
    console.log(fields);
  };

  render() {
    return (
      <div className="sign-in">
        <PageTitle className="sign-in-page-title" title="Payment" />
        {/* <PaymentForm onSubmit={this.onSubmit} className="sign-in-form" /> */}
      </div>
    );
  }
}

Payment = connect(null, actions)(Payment);

export default Payment;
