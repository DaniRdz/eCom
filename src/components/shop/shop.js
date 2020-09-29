import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class Shop extends Component {
  componentDidMount() {
    const headerLinks = [{ id: 1, title: "Login", path: "/" }];
    this.props.setHeaderLinks(headerLinks);
    this.props.fetchShopCategories();
    this.props.fetchShopProducts();
  }
  shouldComponentUpdate(nextProps) {
    if (this.props != nextProps) {
      this.props.setNavbarLinks(nextProps.categories, (id) =>
        this.props.filterProductsWithCategoryId(id)
      );
    }
    return true;
  }
  render() {
    return (
      <div className="shop">
        <div className="shop-products">
          {this.props.filteredProducts.map((product) => {
            return (
              <div key={product.id} className="product">
                <div className="product-title">{product.title}</div>
                <div className="product-description">{product.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { categories, filteredProducts } = state.shop;
  return { categories, filteredProducts };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;
