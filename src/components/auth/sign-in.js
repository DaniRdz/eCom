import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

export default class SignIn extends Component {
    render() {
        return (
            <div className= 'sign-in'>
                sign-in
            </div>
        );
    }
}

SignIn = reduxForm({
    form: 'SignIn'
})(SignIn);