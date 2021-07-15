import React, { Component } from 'react';
import CommonInput from './CommonInput';

class AuthorizationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CommonInput placeholder="Email" type="email" />
        <CommonInput placeholder="password" type="password" />
        <CommonInput placeholder="Repeat Email" type="password" />
      </div>
    );
  }
}
export default AuthorizationContainer;
