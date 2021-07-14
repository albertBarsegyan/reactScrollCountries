/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

class TodoRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { inputValue } = this.props;
    return (
      <li>
        <div>
          <span>{ inputValue}</span>
        </div>
      </li>
    );
  }
}
export default TodoRow;
