import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputType extends Component {
  render() {
    const { inputType } = this.props;
    return (
      <div className="my-4">
        <div className="flex flex-row items-center justify-center">
          <div className="mx-2">
            <span className="text-2xl">Search countries by</span>
          </div>
          <div>
            <select
              name="type"
              className="text-2xl px-3"
              onChange={(e) => {
                inputType(e.target.value);
              }}
            >
              <option value="name">name</option>
              <option value="telephoneCode">telephone Code</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
InputType.propTypes = {
  inputType: PropTypes.func.isRequired,
};
