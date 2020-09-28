import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class Shop extends Component {
  componentDidMount() {
    const headerLinks = [{ id: 1, title: "Login", path: "/" }];
    this.props.setHeaderLinks(headerLinks);
    this.props.fetchShopCategories();
  }
  render() {
    return <div className="shop">Shop...</div>;
  }
}

function mapStateToProps(state) {
  return { state };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;
