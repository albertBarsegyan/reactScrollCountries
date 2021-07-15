import React, { Component } from 'react';
import ButtonCommon from './ButtonCommon';
import InputCommon from './InputCommon';

class ControllerContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleForm = (e) => {
    e.preventDefault();
    let formObject = new FormData(e.target);
    formObject = [...formObject.entries()];
    console.log(formObject);
  };

  render() {
    const { clickEvent, min, max } = this.props;
    return (
      <form onSubmit={this.handleForm}>
        <div className="flex items-center justify-center mt-5">
          <InputCommon
            placeHold="Set max"
            name="maxValueInput"
            min="0"
            max={max}
          />
          <InputCommon
            placeHold="Set min"
            name="minValueInput"
            min="0"
            max={max}
          />
          <InputCommon
            placeHold="Set step"
            name="stepInput"
            min="1"
            max={max - min}
          />
          <button type="submit">Set</button>
        </div>
      </form>
    );
  }
}
export default ControllerContainer;
