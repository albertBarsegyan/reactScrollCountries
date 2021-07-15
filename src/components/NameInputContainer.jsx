import React, { Component } from 'react';
import CommonInput from './CommonInput';

class NameInputContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CommonInput type="text" placeholder="Name" />
        <CommonInput type="text" placeholder="Surname" />
      </div>
    );
  }
}
export default NameInputContainer;
