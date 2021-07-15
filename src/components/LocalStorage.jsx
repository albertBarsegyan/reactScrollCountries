import React, { Component } from 'react';
import DataSpan from './DataSpan';

class LocalStorage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { minVal, maxVal, step } = this.props;
    return (
      <div className="flex flex-col items-center justify-center my-5">
        <div>
          <DataSpan staticText="Local storage data" />
        </div>
        <div className="flex flex-row items-center justify-center my-2">
          <DataSpan dynamicText={maxVal} staticText="Max val:" />
          <DataSpan dynamicText={minVal} staticText="Min val:" />
          <DataSpan dynamicText={step} staticText="Step:" />
        </div>
      </div>
    );
  }
}
export default LocalStorage;
