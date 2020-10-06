import React, { Component } from "react";
import { connect } from "react-redux";

import CartProduct from "./cart-product";
import CartButton from "./cart-button";

import * as actions from "../../actions";


function CartContent(props) {
  const { className, products } = props;
  let count = products.length;
  let renderProducts = products.map((product) => {
    return <CartProduct {...product} key={product.id} />;
  });
  return (
    <div className={`${className} cart-content`}>
      <div className="cart-content-title">Cart ({count})</div>
      <div className="cart-content-products"> {renderProducts}</div>
      <CartFooter className="cart-content-footer" products={products} />
    </div>
  );
}

function CartFooter(props) {
  const { className, products } = props;
  const price = 7.99;
  return (
    <div className={`${className} cart-footer`}>
      <a className="cart-footer-checkout">Checkout</a>
      <div className="cart-footer-subtotal">Subtotal</div>
      <div className="cart-footer-price">${price}</div>
    </div>
  );
}

class ShopCart extends Component {
  componentDidMount() {
    this.props.setCartProducts();
  }

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
    const { className } = this.props;
    return (
      <div id="shop-cart" className={`${className} cart cart-hidden`}>
        <CartButton
          onClick={this.handleAddToCart}
          className="shop-cart-toggle"
          icon="fas fa-times"
        />
        <CartContent
          className="shop-cart-content"
          products={this.props.cartProducts}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return { cartProducts };
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;
