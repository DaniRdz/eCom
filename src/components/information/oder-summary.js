import React, { Component } from "react";

import { UnderlinedTitle, InfoTitle } from "./info-details";

class OrderSummary extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} order-sumary`}>
        <UnderlinedTitle className="order-sumary-title" title="Order Summary" />
        <InfoTitle
          className="order-summary-subtotal"
          title="4 stickers"
          value="$7.96"
        />
        <InfoTitle
          className="order-summary-tax-shipping"
          title="Taxes & Shipping"
          value="$0.16"
        />
        <InfoTitle
          className="order-summary-total"
          title="Total"
          value="$8.12"
        />
      </div>
    );
  }
}

export default OrderSummary;
