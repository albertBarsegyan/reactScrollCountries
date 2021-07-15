import React, { Component } from 'react';
import { render } from 'react-dom';

class MessageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { messageValue } = this.props;

    return (
      <div className="text-center fixed w-full top-1">
        <span className="text-4xl text-red-600">{messageValue}</span>
      </div>
    );
  }
}

export default MessageContainer;
