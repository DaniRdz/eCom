import React, { Component } from "react";
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src="http://via.placeholder.com/50x50" />
        <div>
        {this.props.headerLinks.map((link, index) => {
          return (
            <a className="header-links" key={index}>
              {link.title}
            </a>
          );
        })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { headerLinks } = state.headerNavbar;
  return {
    headerLinks,
  };
}

Header = connect(mapStateToProps)(Header);

export default Header;
