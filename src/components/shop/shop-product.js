import React, { Component } from "react";

import GreenPriceTag from "../green-price-tag";
import Quantity from "../quantity";

class ShopProduct extends Component {
  render() {
    const { title, description, price } = this.props;
    return (
      <div className="product">
        <div className="product-title">{title}</div>
        <div className="product-description">{description}</div>
        <GreenPriceTag className="product-price" title={price} />
        <Quantity className="product-quantity" quantity={1} />
        <div className="product-add-to-cart">Add to Cart</div>
      </div>
    );
  }
}

export default ShopProduct;
