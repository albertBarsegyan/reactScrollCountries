import React, { Component } from 'react';
import DataList from './DataList';
import LoaderContainer from './LoaderContainer';
import SearchInput from './SearchInput';

export default class SearchContainer extends Component {
  render() {
    return (
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-20 w-6/12">
          <LoaderContainer />
          <SearchInput />
          <DataList />
        </div>
      </div>
    );
  }
}
