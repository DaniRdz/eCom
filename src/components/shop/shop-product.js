import React, { Component } from "react";

import GreenPriceTag from "../green-price-tag";
import Quantity from "../quantity";

class ShopProduct extends Component {
  render() {
    const { title, description, price } = this.props;
    return (
      <div className="product">
        <div className="product-front">
          <img
            clasName="product-front-img"
            src="http://via.placeholder.com/220x220"
          ></img>
          <div className="product-front-title">{title}</div>
        </div>
        <div className="product-back">
          <div className="product-back-title">{title}</div>
          <div className="product-back-description">{description}</div>
          <GreenPriceTag className="product-back-price" title={price} />
          <Quantity className="product-back-quantity" quantity={1} />
          <div className="product-back-add-to-cart">Add to Cart</div>
        </div>
      </div>
    );
  }
}

export default ShopProduct;
