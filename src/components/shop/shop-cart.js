import React, { Component } from "react";

function CartButton(props) {
  const { className, icon } = props;
  return (
    <div className={`${className} cart-button`}>
      <i className={icon} />
    </div>
  );
}

function CartContent(props) {
  const { className } = props;
  return <div className={`${className} cart-content`}>...content</div>;
}

class ShopCart extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} cart`}>
        <CartButton className="shop-cart-toggle" icon="fas fa-times" />
        <CartContent className="shop-cart-content" />
      </div>
    );
  }
}

export default ShopCart;
