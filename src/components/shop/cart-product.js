import React, { Component } from "react";

import Quantity from "../quantity";
import GreenPriceTag from "../green-price-tag";

class CartProduct extends Component {
  render() {
    const { quantity, product } = this.props;
    const { title, price } = product;
    return (
      <div className="cart-product">
        <img
          className="cart-product-img"
          src="http://via.placeholder.com/130x130"
        />
        <div className="cart-product-title">{title}</div>
        <Quantity className="cart-product-quantity" quantity={quantity} />
        <a className="cart-product-remove">Remove</a>
        <GreenPriceTag className="cart-product-price" title={price} />
      </div>
    );
  }
}

export default CartProduct;
