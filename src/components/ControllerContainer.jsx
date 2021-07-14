import React, { Component } from 'react';
import ButtonCommon from './ButtonCommon';

class ControllerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { clickEvent } = this.props;
    return (
      <div className="flex items-center justify-center mt-5">
        <div className="mx-3">
          <input type="text" placeholder="Set max" className="border border-green-500 px-4 py-2 text-xl text-green-500 placeholder-green-500" />
        </div>
        <div className="mx-3">
          <input type="text" placeholder="Set min" className="border border-green-500 px-4 py-2 text-xl text-green-500 placeholder-green-500" />
        </div>
        <div className="mx-3">
          <input type="text" placeholder="Set step" className="border border-green-500 px-4 py-2 text-xl text-green-500 placeholder-green-500" />
        </div>
        <ButtonCommon buttonName="Set" clickEvent={clickEvent} />
      </div>
    );
  }
}
export default ControllerContainer;
