import React, { Component } from 'react';
import ButtonCommon from './ButtonCommon';
import InputCommon from './InputCommon';

class ControllerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { clickEvent } = this.props;
    return (
      <form onSubmit="">
        <div className="flex items-center justify-center mt-5">

          <InputCommon placeHold="Set max" />
          <InputCommon placeHold="Set min" />
          <InputCommon placeHold="Set step" />
          <ButtonCommon buttonName="Set" clickEvent={clickEvent} />

        </div>
      </form>
    );
  }
}
export default ControllerContainer;
