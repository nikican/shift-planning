import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoadingDots extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { frame: 1 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({  // eslint-disable-line react/no-did-mount-set-state
        frame: this.state.frame + 1
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    /*eslint-disable no-unused-vars */
    const { interval, dots, ...rest } = this.props;

    let dotAmmount = this.state.frame % (dots + 1);
    let text = '';
    while (dotAmmount > 0) {
      text += '.';
      dotAmmount--;
    }
    return <span {...rest}>{text}&nbsp;</span>;
  }
}

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number
};

LoadingDots.defaultProps = {
  interval: 300,
  dots: 3
};

export default LoadingDots;
