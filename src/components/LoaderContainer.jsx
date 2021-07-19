import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class LoaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: [],
      loadMessage: 'Loading...',
    };
  }

  componentDidMount() {
    const { sendData } = this.props;
    //   get countries data
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        const { data } = response;
        return data.map((item) => {
          const countryObject = {
            name: item.name,
            flag: item.flag,
            telephoneCode: item.callingCodes[0],
          };
          return countryObject;
        });
      })
      .then((data) => {
        this.setState({ loadMessage: '', countryData: data });
        sendData(data);
        return true;
      })
      .catch(() => {
        this.setState({ loadMessage: 'Failed to load content.' });
      });
  }

  render() {
    const { loadMessage } = this.state;
    return (
      <div>
        <span className="text-2xl">{loadMessage}</span>
      </div>
    );
  }
}

LoaderContainer.propTypes = {
  sendData: PropTypes.func,
};
LoaderContainer.defaultProps = {
  sendData: null,
};
