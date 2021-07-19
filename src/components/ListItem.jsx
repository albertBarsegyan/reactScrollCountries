import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  render() {
    const { imgURL, countryName } = this.props;
    return (
      <li>
        <div>
          <div>
            <img src={imgURL} alt="back" />
          </div>
          <div>
            <span>{countryName}</span>
          </div>
        </div>
      </li>
    );
  }
}
ListItem.propTypes = {
  imgURL: PropTypes.string,
  countryName: PropTypes.string,
};
ListItem.defaultProps = {
  imgURL: '',
  countryName: '',
};
