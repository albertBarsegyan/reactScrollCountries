import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataListContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="w-full mt-5 flex flex-col items-center justify-center">
        <ul className="w-full">{children}</ul>
      </div>
    );
  }
}

DataListContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
