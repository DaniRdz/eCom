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
      this.props.setNavbarLinks(nextProps.categories, (id) => this.props.filterProductsWithCategoryId(id) );
    }
    return true;
  }
  render() {
    return <div className="shop">Shop...</div>;
  }
}

function mapStateToProps(state) {
  const { categories } = state.shop;
  return { categories };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;
