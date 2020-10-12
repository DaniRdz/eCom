import React, { Component } from "react";
import { connect } from "react-redux";

import { UnderlinedTitle, InfoTitle } from "./info-details";

class OrderSummary extends Component {
  render() {
    const { className } = this.props;
    let subtotal = 0;
    let tax = 0.16;
    let countTickers = 0;
    this.props.cartProducts.map((cartProduct) => {
      subtotal += cartProduct.quantity * cartProduct.product.price;
      countTickers += cartProduct.quantity;
    });
    return (
      <div className={`${className} order-sumary`}>
        <UnderlinedTitle className="order-sumary-title" title="Order Summary" />
        <InfoTitle
          className="order-summary-subtotal"
          title={`${countTickers} sticker`}
          value={`$${subtotal}`}
        />
        <InfoTitle
          className="order-summary-tax-shipping"
          title="Taxes & Shipping"
          value={`$${tax}`}
        />
        <InfoTitle
          className="order-summary-total info-title-green"
          title="Total"
          value={`$${tax+subtotal}`}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return { cartProducts };
}
OrderSummary = connect(mapStateToProps)(OrderSummary);

export default OrderSummary;
