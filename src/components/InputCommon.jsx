import React, { Component } from 'react';

class InputCommon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { placeHold } = this.props;
    return (
      <div className="mx-3">
        <input type="text" placeholder={placeHold} className="border border-green-500 px-4 py-2 text-xl text-green-500 placeholder-green-500" />
      </div>
    );
  }
}
export default InputCommon;
