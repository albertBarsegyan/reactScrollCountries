import React, { Component } from 'react';

class CommonInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, placeholder, value, name, errorMessage, ...data } = this.props;
    return (
      <div>
        <input
          {...data}
          name={name}
          value={value}
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
