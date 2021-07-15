import React, { Component } from 'react';

class CommonInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, placeholder, value, name } = this.props;
    return (
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        className="border border-pink-500 px-4 py-2 text-xl text-pink-500 outline-none"
      />
    );
  }
}
export default CommonInput;
