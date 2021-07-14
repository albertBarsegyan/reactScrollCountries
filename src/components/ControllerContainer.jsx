import React, { Component } from 'react';
import ButtonCommon from './ButtonCommon';

class ControllerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { clickEvent } = this.props;
    return (
      <div className="flex items-center justify-center">
        <div className="mx-3">
          <input type="text" placeholder="Set max" />
        </div>
        <div className="mx-3">
          <input type="text" placeholder="Set min" />
        </div>
        <div className="mx-3">
          <input type="text" placeholder="Set step" />
        </div>
        <ButtonCommon buttonName="Set" clickEvent={clickEvent} />
      </div>
    );
  }
}
export default ControllerContainer;
