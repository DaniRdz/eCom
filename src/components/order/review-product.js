import React, { Component } from "react";

import GreenPriceTag from "../green-price-tag";

class ReviewProduct extends Component {
  render() {
    const { quantity, product } = this.props;
    const { imageURL, title, price } = product;
    return (
      <div className={"review-product"}>
        <img className="review-product-img" src={imageURL} />
        <div className="review-product-title">{title}</div>
        <div className="review-product-quantity">{quantity}</div>
        <GreenPriceTag
          className="review-product-price"
          title={quantity * price}
        />
      </div>
    );
  }
}

export default ReviewProduct;
