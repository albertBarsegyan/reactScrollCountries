import React, { Component } from 'react';
import CommonInput from './CommonInput';

class AuthorizationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex items-center justify-center flex-col">
        <div className="my-2">
          <CommonInput placeholder="Email" type="email" />
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
