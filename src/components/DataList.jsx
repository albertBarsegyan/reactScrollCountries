import React, { Component } from 'react';
import logo from '../assets/img/logo.jpg';
import ListItem from './ListItem';

export default class DataList extends Component {
  render() {
    return (
      <div className="w-full mt-5 flex flex-col items-center justify-center">
        <ul>
          <ListItem countryName="Japan" imgURL={logo} />
        </ul>
      </div>
    );
  }
}
