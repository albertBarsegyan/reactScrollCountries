import React, { Component } from 'react';
import logo from '../assets/img/logo.jpg';

export default class ListItem extends Component {
  render() {
    const { value, innerText } = this.props;
    return (
      <option value={value}>
        <img src={logo} alt="" />
      </option>
    );
  }
}
