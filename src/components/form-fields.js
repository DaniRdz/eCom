import React, { Component } from "react";

export class FormInput extends Component {
  render() {
    const { className, title, type, placeholder, input } = this.props;
    return (
      <div className={`${className} form-input`}>
        <label className="form-input-label">{title}</label>
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          {...input}
        ></input>
      </div>
    );
  }
}

export class FormButton extends Component {
  render() {
    const { className, title, type, input, onClick } = this.props;
    return (
      <div className={`${className} form-button`}>
        <button
          className="button"
          type={type}
          {...input}
          onClick={onClick}
        >
          {title}
        </button>
      </div>
    );
  }
}
