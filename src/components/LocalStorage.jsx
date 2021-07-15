import React, { Component } from 'react';

class LocalStorage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { minVal, maxVal, step } = this.props;
    return (
      <div className="flex flex-col items-center justify-center  my-5">
        <div>
          <p className="text-green-500 text-3xl">Local storage data</p>
        </div>
        <div className="flex flex-row items-center justify-center my-2">
          <div className="mx-5">
            <span className="text-xl text-green-500">
              Min value:
              {minVal}
            </span>
          </div>
          <div className="mx-5">
            <span className="text-xl text-green-500">
              Max value:
              {maxVal}
            </span>
          </div>
          <div className="mx-5">
            <span className="text-xl text-green-500">
              Step:
              {step}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default LocalStorage;
