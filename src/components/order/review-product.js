import React, { Component } from "react";

import GreenPriceTag from "../green-price-tag";

class ReviewProcuct extends Component {
  render() {
    const { className, quantity, product } = this.props;
    const { imageURL, title, price } = product;
    return (
      <div className={`${className} review-product`}>
        <img className="review-img" src={imageURL} />
        <div className="review-title">{title}</div>
        <div className="review-quantity">{quantity}</div>
        <GreenPriceTag className="review-price" title={quantity * price} />
      </div>
    );
  }
}

export default ReviewProcuct;
