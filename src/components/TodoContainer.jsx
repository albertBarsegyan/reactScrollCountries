import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoRow from './TodoRow';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {
          inputValue: 'text',
          pos: 0,
        },
      ],
    };
  }

  render() {
    const { listData } = this.state;
    return (
      <div className="container">
        <TodoInput />
        <div>
          <ul>
            {listData.length > 0 ? listData.map((item) => (
              <TodoRow key={item.pos} inputValue={item.inputValue} />
            )) : null}
          </ul>
          <div />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
