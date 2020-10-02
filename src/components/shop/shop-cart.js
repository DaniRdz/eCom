import React, { Component } from "react";

class ShopCart extends Component {
  render() {
    const { className } = this.props;
    return <div className={`${className} cart`}>Shop Kart!!</div>;
  }
}

export default ShopCart;
