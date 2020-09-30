import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

function FormSearchBar(props) {
  return (
    <input
      className={`${props.className} form-search-bar`}
      {...props.input}
      type="text"
      placeholder={`${props.placeholder}`}
    />
  );
}

class ShopSearchBar extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
        <Field
          className="shop-search-bar-form"
          placeholder="search"
          name="query"
          component={FormSearchBar}
        />
      </form>
    );
  }
}

ShopSearchBar = reduxForm({
  form: "ShopSearchBar",
})(ShopSearchBar);

export default ShopSearchBar;