import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class NavigationContainer extends Component {
  handleOnClick = (link) => {
    this.props.changeNavbarActive(link.id);
    if (this.props.onClick) {
      this.props.onClick(link.id);
    }
  };
  render() {
    return (
      <div className="nav-wrapper">
        {this.props.navbarLinks.map((link, index) => {
          return (
            <a
              className={`nav-link ${link.active ? "green-text" : ""}`}
              key={index}
              onClick={() => this.handleOnClick(link)}
            >
              {link.title}
            </a>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { navbarLinks, onClick } = state.headerNavbar;
  return {
    navbarLinks,
    onClick,
  };
}

NavigationContainer = connect(mapStateToProps, actions)(NavigationContainer);

export default NavigationContainer;
