/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import CommonInput from './CommonInput';
import {
  emailValidator,
  emptyInputCheck,
  passwordValidator,
  repeatPasswordCheck,
} from '../helpers/formValidators';

class AuthorizationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailError: '',
      passwordError: '',
      passwordRepeatError: '',
      password: '',
    };
    this.emailValidator = emailValidator.bind(this);
    this.passwordValidator = passwordValidator.bind(this);
    this.emptyInputCheck = emptyInputCheck.bind(this);
    this.repeatPasswordCheck = repeatPasswordCheck.bind(this);
  }

  render() {
    const { emailError, passwordError, passwordRepeatError } = this.state;
    const { sendEmailError, sendPasswordError, sendPasswordRepeatError } = this.props;
    return (
      <div className="flex items-center justify-center flex-col">
        <div className="my-2">
          <CommonInput
            errorMessage={emailError}
            placeholder="Email"
            name="email"
            type="email"
            onChange={(e) => {
              this.emailValidator(e, 'emailError', 'Invalid email');
            }}
            onBlur={(e) => {
              this.emptyInputCheck(e, 'emailError', 'Email is empty');
              sendEmailError(emailError);
            }}
          />
        </div>
        <div className="my-2">
          <CommonInput
            errorMessage={passwordError}
            name="password"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              this.passwordValidator(e, 'passwordError');
            }}
            onBlur={(e) => {
              this.emptyInputCheck(e, 'passwordError', 'Password is empty');
              sendPasswordError(passwordError);
            }}
          />
        </div>
        <div className="my-2">
          <CommonInput
            errorMessage={passwordRepeatError}
            placeholder="Repeat password"
            type="password"
            onChange={(e) => {
              this.repeatPasswordCheck(e, 'passwordRepeatError');
            }}
            onBlur={(e) => {
              this.emptyInputCheck(e, 'passwordRepeatError', 'Input is empty.');
              sendPasswordRepeatError(passwordRepeatError);
            }}
          />
        </div>
      </div>
    );
  }
}
export default AuthorizationContainer;
