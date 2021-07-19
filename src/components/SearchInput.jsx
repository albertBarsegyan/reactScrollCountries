import React, { Component } from 'react';

export default class SearchInput extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="border-b border-gray-700 text-gray-700 px-4 py-2 text-2xl placeholder-gray-700 outline-none focus:border focus:bg-green-500 focus:text-white  duration-150 ease-in-out"
        />
      </div>
    );
  }
}
