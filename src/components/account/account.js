import React, { Component } from "react";
import { connect } from "react-redux";

import PurchaseHistory from "../account/purchase-history";
import AccountInformation from "../account/account-information";

import * as actions from "../../actions";

class Account extends Component {
  componentDidMount() {
    const headerLinks = [
      { id: 0, title: "Shop", path: "/shop" },
      { id: 1, title: "Logout", path: "/" },
    ];

    const navbarLinks = [
      {
        id: 0,
        title: "Purchase History",
        active: true,
        component: <PurchaseHistory />,
      },
      {
        id: 1,
        title: "Account Information",
        active: false,
        component: <AccountInformation />,
      },
    ];
    this.props.setHeaderLinks(headerLinks);
    this.props.setNavbarLinks(navbarLinks);
  }

  renderContent() {
    let jsx;
    if (this.props.navbarLinks) {
      this.props.navbarLinks.forEach((link) => {
        if (link.active) {
          jsx = link.component;
        }
      });
    }
    return jsx;
  }
  render() {
    return <div className="account-container">{this.renderContent()}</div>;
  }
}
function mapStateToProps(state) {
  const { headerLinks, navbarLinks } = state.headerNavbar;
  return { headerLinks, navbarLinks };
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;
