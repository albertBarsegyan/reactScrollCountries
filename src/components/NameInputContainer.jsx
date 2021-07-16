import React, { Component } from 'react';
import CommonInput from './CommonInput';

class NameInputContainer extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-around">
        <div className="my-2">
          <CommonInput type="text" value="Jordan" placeholder="Name" errorMessage="" />
        </div>
        <div className="my-2">
          <CommonInput type="text" placeholder="Surname" />
        </div>
      </div>
    );
  }
}
export default NameInputContainer;
