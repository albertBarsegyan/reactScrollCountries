/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

class CommonInput extends Component {
  render() {
    const { type, placeholder, name, errorMessage, ...attr } = this.props;
    return (
      <div>
        <input
          {...attr}
          name={name}
          // value={value}
          type={type}
          placeholder={placeholder}
          className="border border-purple-500 px-4 py-2 text-xl text-purple-500 outline-none"
        />
        <div className="text-center text-red-500 text-xl">
          <span>{errorMessage}</span>
        </div>
      </div>
    );
  }
}
export default CommonInput;
