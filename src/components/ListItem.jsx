import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageComponent from './ImageComponent';

export default class ListItem extends Component {
  render() {
    const { imgURL, countryName, telephoneCode } = this.props;
    return (
      <li className="my-3 hover:bg-green-500 hover:text-white duration-150 py-4 flex items-center justify-center">
        <div className="w-full">
          <button type="button" className="w-full cursor-pointer">
            <div className="flex flex-row justify-left items-center">
              <div className="w-1/4">
                <span>{`+${telephoneCode}`}</span>
              </div>
              <div className="w-1/4">
                <ImageComponent alt={countryName} src={imgURL} />
              </div>

              <div className="w-1/4">
                <span>{countryName}</span>
              </div>
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
