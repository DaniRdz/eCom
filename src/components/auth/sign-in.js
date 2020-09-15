import React, { Component } from 'react';

import SignInForm from './sign-in-form';

export default class SignIn extends Component {
    render() {
        return (
            <div className= 'sign-in'>
                <SignInForm className= 'sign-in-form'/>
            </div>
        );
    }
}
