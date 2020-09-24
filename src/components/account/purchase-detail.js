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
      <div className={`${className} purchase-detail`}>
        <PurchaseDetailLebel
          className="purchase-detail-order-number"
          title="Order Number"
          value={orderNumber}
        />
        <PurchaseDetailLebel
          className="purchase-detail-order-date"
          title="Order Date"
          value={orderDate}
        />
        <PurchaseDetailLebel
          className="purchase-detail-shipping-addresses"
          title="Shipping Address"
          value={`${name}\n${shippingAddress}`}
        />
        <PurchaseDetailLebel
          className="purchase-detail-total"
          title="Total"
          value={amount}
        />
        <PurchaseDetailLebel
          className="purchase-detail-credit-card"
          title="Credit Card"
          value={creditCard}
        />
        <a className='purchase-detail-track-shipment'>Track Shipment</a>
        <a className='purchase-detail-print-receipt'>Print Receipt</a>

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
