import React, { Component } from "react";

import GreenPriceTag from "../green-price-tag";
import Quantity from "../quantity";

class ShopProduct extends Component {
  handleAddToCart = () => {
    if (
      document.getElementById("shop-cart").classList.contains("cart-hidden")
    ) {
      document.getElementById("shop-cart").classList.remove("cart-hidden");
    } else {
      document.getElementById("shop-cart").classList.add("cart-hidden");
    }
  };
  render() {
    const { title, description, price } = this.props;
    return (
      <div className="product">
        <div className="product-front">
          <img
            className="product-front-img"
            src="http://via.placeholder.com/220x220"
          ></img>
          <div className="product-front-title">{title}</div>
        </div>
        <div className="product-back">
          <div className="product-back-title">{title}</div>
          <div className="product-back-description">{description}</div>
          <GreenPriceTag className="product-back-price" title={price} />
          <Quantity className="product-back-quantity" quantity={1} />
          <a
            onClick={this.handleAddToCart}
            className="product-back-add-to-cart"
          >
            Add to Cart
          </a>
        </div>
      </div>
    );
  }
}

export default ShopProduct;
