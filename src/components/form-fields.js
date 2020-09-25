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
    const { className, title, type, input, onClick, short } = this.props;
    return (
      <div className={`${className} form-button`}>
        <button
          className={`button ${short ? "gray-button" : ""}`}
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

export class LongGrayButton extends Component {
  render() {
    const { className, title, type, input, onClick, labelTitle } = this.props;
    return (
      <div className={`${className} form-button-long-gray`}>
        <label className="form-button-long-gray-label">{labelTitle}</label>
        <button className={"button"} type={type} {...input} onClick={onClick}>
          {title}
        </button>
      </div>
    );
  }
}
