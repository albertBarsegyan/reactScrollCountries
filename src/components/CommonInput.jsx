/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

class CommonInput extends Component {
  render() {
    const { errorMessage, refProps, ...attr } = this.props;
    return (
      <div className="flex flex-col items-center justify-center">
        <input
          {...attr}
          ref={refProps}
          className="border border-purple-500
            px-4 py-2 text-xl text-purple-500 outline-none placeholder-purple-500"
          required
        />
        <div className="text-center text-red-500 text-xl h-5">
          <p>{errorMessage && errorMessage.length > 0 ? errorMessage : undefined}</p>
        </div>
      </div>
    );
  }
}
export default CommonInput;
