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
  const { className, products } = props;
  let count = products.length;
  let renderProducts = products.map((product) => {
    return <h1 key={product}>{product}</h1>;
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
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} cart`}>
        <CartButton className="shop-cart-toggle" icon="fas fa-times" />
        <CartContent
          className="shop-cart-content"
          products={[123, 12, 21, 3, 123, 12, 21, 3, 123, 12, 21, 3]}
        />
      </div>
    );
  }
}

export default ShopCart;
