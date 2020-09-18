import React, { Component } from "react";
import { withRouter } from "react-router";

class Details extends Component {
  renderChildrens = () => {
    const { links, info } = this.props;
    let childrens = [];
    if (links) {
      childrens = links.map((link) => {
        return (
          <a key={link.id} onClick={link.onClick}>
            {link.title}
          </a>
        );
      });
    } else if (info) {
      childrens = info.map((item) => {
        return <div className='details-item' key={item.id}>{item.title}</div>;
      });
    }
    return childrens;
  };
  render() {
    const { className, title } = this.props;
    return (
      <div className={`${className} details`}>
        <div className="details-title">{title}</div>
        <div className="details-links">{this.renderChildrens()}</div>
      </div>
    );
  }
}

export default withRouter(Details);
