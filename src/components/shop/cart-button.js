import React, { Component } from "react";

class CartButton extends Component {
  render() {
    const { className, icon, onClick } = this.props;
    return (
      <a onClick={onClick} className={`${className} cart-button`}>
        <i className={icon} />
      </a>
    );
  }
}

export default CartButton;
