import React, { Component } from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

class Gallery extends Component {
  render() {
    const { alt, src } = this.props;
    return (
      <div className="flex items-center justify-center">
        <LazyLoadImage width="50" alt={alt} effect="blur" src={src} />
      </div>
    );
  }
}
Gallery.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
};
Gallery.defaultProps = {
  alt: '',
  src: '',
};
export default trackWindowScroll(Gallery);
