import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

import { getRandomNumber, getRoundRobin } from '../../lib/utils/math';

export default class SliderField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    // console.log('this.props', this.props);
    const { random, duration } = this.props;
    setInterval(() => {
      if (random) {
        this.setState({ index: getRandomNumber(6) });
      } else {
        const { index } = this.state;
        this.setState({ index: getRoundRobin(6, index) });
      }
    }, duration);
  }

  render() {
    // console.log('this.props', this.props);
    const {
      altText, banners, defaultBanner, height,
    } = this.props;
    // console.log('this.state', this.state);
    const { index } = this.state;
    return (
      <div>
        <img
          src={banners ? banners[index] : defaultBanner}
          alt={altText}
          height={height}
        />
      </div>
    );
  }
}

//  set up type checking
SliderField.propTypes = {
  altText: PropTypes.string.isRequired,
  banners: PropTypes.arrayOf.isRequired,
  defaultBanner: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  random: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
};
