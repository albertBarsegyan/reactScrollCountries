import React, { Component } from 'react';
import CommonInput from './CommonInput';

class GenderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <span>Choose gender</span>
        </div>
        <div>
          <label htmlFor="male">Male</label>
          <input type="radio" name="male" value="male" />
          <label htmlFor="female">Female</label>
          <input type="radio" name="male" value="female" />
        </div>
      </div>
    );
  }
}
export default GenderContainer;
