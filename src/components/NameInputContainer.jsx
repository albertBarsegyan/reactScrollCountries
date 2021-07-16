import React, { Component } from 'react';
import CommonInput from './CommonInput';

class NameInputContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-around">
        <div className="my-2">
          <CommonInput type="text" placeholder="Name" />
        </div>
        <div className="my-2">
          <CommonInput type="text" placeholder="Surname" />
        </div>
      </div>
    );
  }
}
export default NameInputContainer;
