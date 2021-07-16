import React, { Component } from 'react';
import FormContainer from './FormContainer';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <FormContainer />
      </div>
    );
  }
}
export default Header;
