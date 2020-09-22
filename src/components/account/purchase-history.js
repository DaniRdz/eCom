import React, { Component } from "react";

import PageTitle from "../page-title";

export default class PurchaseHistory extends Component {
  render() {
    return (
      <div className="purchase-history">
        <PageTitle
          className="purchase-history-page-tile"
          title="Purchase History"
        />
      </div>
    );
  }
}
