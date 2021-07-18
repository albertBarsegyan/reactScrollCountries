/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
import React, { Component, createRef } from 'react';
import CommonInput from './CommonInput';
import {
  emailValidator,
  emptyInputCheck,
  passwordValidator,
  repeatPasswordCheck,
  handlePasswordBlur,
} from '../helpers/formValidators';

class AuthorizationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailError: '',
      passwordError: '',
      passwordRepeatError: '',
      password: '',
      repeatPassword: '',
    };
    this.passwordInput = createRef();
    this.passwordRepeatInput = createRef();
    this.emailValidator = emailValidator.bind(this);
    this.passwordValidator = passwordValidator.bind(this);
    this.emptyInputCheck = emptyInputCheck.bind(this);
    this.repeatPasswordCheck = repeatPasswordCheck.bind(this);
    this.handlePasswordBlur = handlePasswordBlur.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      console.log(this.state, 'inside auth , state updated ->');
    }
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
            refProps={this.passwordInput}
            errorMessage={passwordError}
            name="password"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              this.passwordValidator(e, 'passwordError', this.passwordRepeatInput);
            }}
            onBlur={(e) => {
              this.emptyInputCheck(e, 'passwordError', 'Password is empty');
              sendPasswordError(passwordError);
              this.handlePasswordBlur(e, { currentRef: this.passwordInput, targetRef: this.passwordRepeatInput }, { current: 'password', target: 'repeatPassword' });
            }}
          />
        </div>
        <div className="my-2">
          <CommonInput
            refProps={this.passwordRepeatInput}
            errorMessage={passwordRepeatError}
            placeholder="Repeat password"
            type="password"
            onChange={(e) => {
              this.repeatPasswordCheck(e, 'passwordRepeatError', this.passwordInput);
            }}
            onBlur={(e) => {
              this.emptyInputCheck(e, 'passwordRepeatError', 'Input is empty.');
              sendPasswordRepeatError(passwordRepeatError);
              this.handlePasswordBlur(e, { currentRef: this.passwordRepeatInput, targetRef: this.passwordInput }, { current: 'repeatPassword', target: 'password' });
            }}
          />
        </div>
      </div>
    );
  }
}
export default AuthorizationContainer;
