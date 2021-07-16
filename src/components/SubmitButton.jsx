import React, { Component } from 'react';

class SubmitButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex items-center justify-center my-4">
        <button
          type="submit"
          className="border border-purple-500 px-4 py-2 text-purple-500 hover:bg-purple-500 hover:text-white duration-150"
        >
          Sign up
        </button>
      </div>
    );
  }
}
export default SubmitButton;
