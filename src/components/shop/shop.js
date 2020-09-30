import React, { Component } from "react";
import { connect } from "react-redux";

import ShopSearchBar from "./shop-searchbar";
import ShopProduct from "./shop-product";

import * as actions from "../../actions";

class Shop extends Component {
  onSubmit = (fields) => {
    this.props.filterProductsWithQuery(fields);
  };

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
        <ShopSearchBar onSubmit={this.onSubmit} className="shop-search-bar" />
        <div className="shop-products">
          {this.props.filteredProducts.map((product) => {
            return <ShopProduct {...product} key={product.id} />;
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
