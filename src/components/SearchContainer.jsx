import React, { Component } from 'react';
import dataFilterByValue from '../helpers/dataFilterByValue';
import handleSearchOnChange from '../helpers/handleSearchOnChange';
import DataListContainer from './DataListContainer';
import ListItem from './ListItem';

import LoaderContainer from './LoaderContainer';
import SearchInput from './SearchInput';

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: [],
      searchInputValue: '',
    };
    this.handleSearchOnChange = handleSearchOnChange.bind(this);
  }

  render() {
    const { countryData, searchInputValue } = this.state;
    return (
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-20 md:w-6/12">
          <LoaderContainer
            sendData={(countries) => {
              this.setState({ countryData: countries });
            }}
          />
          <SearchInput
            onChange={(e) => {
              this.handleSearchOnChange(e, 'searchInputValue');
            }}
          />
          <DataListContainer>
            {dataFilterByValue(countryData, searchInputValue).map((item) => {
              const { name, flag, telephoneCode } = item;
              return (
                <ListItem
                  key={name}
                  imgURL={flag}
                  countryName={name}
                  telephoneCode={telephoneCode}
                />
              );
            })}
          </DataListContainer>
        </div>
      </div>
    );
  }
}
