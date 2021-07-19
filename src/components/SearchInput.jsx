import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchInput extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="w-full">
        <input
          onChange={onChange}
          type="text"
          className="w-full border-b border-gray-700 text-gray-700 px-4 py-2 text-2xl placeholder-gray-700 outline-none focus:border focus:bg-green-500 focus:text-white  duration-150 ease-in-out"
        />
      </div>
    );
  }
}
SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};
