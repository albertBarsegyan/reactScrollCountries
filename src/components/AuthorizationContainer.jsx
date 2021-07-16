import React, { Component } from 'react';
import CommonInput from './CommonInput';
import { emailValidator, emptyInputCheck } from '../helpers/formValidators';

class AuthorizationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailError: '',
    };
    this.emailValidator = emailValidator.bind(this);
  }

  render() {
    const { emailError } = this.state;
    return (
      <div className="flex items-center justify-center flex-col">
        <div className="my-2">
          <CommonInput
            errorMessage={emailError}
            placeholder="Email"
            type="email"
            onChange={(e) => {
              this.emailValidator(e, 'emailError', 'Invalid email');
            }}
            onBlur={(e) => { console.log(e.target.value); }}
          />
        </div>
        <div className="my-2">
          <CommonInput placeholder="Password" type="password" />
        </div>
        <div className="my-2">
          <CommonInput placeholder="Repeat password" type="password" />
        </div>
      </div>
    );
  }
}
export default AuthorizationContainer;
