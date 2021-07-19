import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  render() {
    const { imgURL, countryName, telephoneCode } = this.props;
    return (
      <li>
        <div>
          <button type="button" className="cursor-pointer">
            <div>
              <span>{telephoneCode}</span>
            </div>
            <div>
              <img src={imgURL} alt="back" width="60" />
            </div>
            <div>
              <span>{countryName}</span>
            </div>
          </button>
        </div>
      </li>
    );
  }
}
ListItem.propTypes = {
  imgURL: PropTypes.string,
  telephoneCode: PropTypes.string,
  countryName: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
ListItem.defaultProps = {
  imgURL: '',
  countryName: '',
  telephoneCode: '',
};
