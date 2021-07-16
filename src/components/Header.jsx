import React, { Component } from 'react';
import FormContainer from './FormContainer';

class Header extends Component {
  render() {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <FormContainer />
      </div>
    );
  }
}
export default Header;
