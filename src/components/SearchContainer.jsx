import React, { Component } from 'react';
import DataList from './DataList';
import SearchInput from './SearchInput';

export default class SearchContainer extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <SearchInput />
        <DataList />
      </div>
    );
  }
}
