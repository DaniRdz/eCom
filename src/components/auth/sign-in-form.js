import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';


export default class SignInForm extends Component {
    render() {
        const {className} = this.props;
        return (
            <form className={`${className}`}>
                sign In
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);