/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

class GenderContainer extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <span className="text-purple-500 text-xl">Choose gender</span>
        </div>
        <div className="flex flex-row items-center justify-center my-2">
          <div className="mx-3">
            <label htmlFor="male" className="text-purple-500 mr-1">
              Male
            </label>
            <input type="radio" name="gender" value="male" required />
          </div>
          <div className="mx-3">
            <label htmlFor="female" className="text-purple-500 mr-1">
              Female
            </label>
            <input type="radio" name="gender" value="female" required />
          </div>
        </div>
      </div>
    );
  }
}
export default GenderContainer;
