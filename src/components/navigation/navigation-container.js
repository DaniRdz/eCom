import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class NavigationContainer extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        {this.props.navbarLinks.map((link, index) => {
          return (
            <a
              className={`nav-link ${link.active ? "green-text" : ""}`}
              key={index}
              onClick={() => this.props.changeNavbarActive(link.id)}
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
  const { navbarLinks } = state.headerNavbar;
  return {
    navbarLinks,
  };
}

NavigationContainer = connect(mapStateToProps, actions)(NavigationContainer);

export default NavigationContainer;
