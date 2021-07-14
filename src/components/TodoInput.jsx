import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" />
          <button type="button">Add todo</button>
        </div>
      </div>
    );
  }
}
export default TodoInput;
