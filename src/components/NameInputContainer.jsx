import React, { Component } from 'react';
import CommonInput from './CommonInput';

class NameInputContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-row items-center justify-around">
        <div className="mx-2">
          <CommonInput type="text" placeholder="Name" />
        </div>
        <div className="mx-2">
          <CommonInput type="text" placeholder="Surname" />
        </div>
      </div>
    );
  }
}
export default NameInputContainer;
