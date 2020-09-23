import React, { Component } from "react";
import { connect } from "react-redux";

function PurchaseDetailLebel({ className, title, value }) {
  return (
    <div className={`${className} purchase-detail-label`}>
      <div className="purchase-detail-label-title">{title}</div>
      <div className="purchase-detail-label-value">{value}</div>
    </div>
  );
}

class PurchaseDetail extends Component {
  render() {
    const { className, orderNumber, orderDate, user, amount, creditCard } = this.props;
    const { name, shippingAddress } = user;
    return (
      <div className={`${className} purchases-detail`}>
        <PurchaseDetailLebel
          className="purchase-detail-oreder-number"
          title="Order Number"
          value={orderNumber}
        />
        <PurchaseDetailLebel
          className="purchase-detail-oreder-date"
          title="Order Date"
          value={orderDate}
        />
        <PurchaseDetailLebel
          className="purchase-detail-oreder-shipping"
          title="shipping Address"
          value={`${name}\n${shippingAddress}`}
        />
        <PurchaseDetailLebel
          className="purchase-detail-oreder-total"
          title="Total"
          value={amount}
        />
        <PurchaseDetailLebel
          className="purchase-detail-oreder-credit-card"
          title="Credit Card"
          value={creditCard}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { purchaseDetail } = state.user;
  return {
    ...purchaseDetail,
  };
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);

export default PurchaseDetail;
