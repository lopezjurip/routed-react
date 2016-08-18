// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class About extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    return (
      <div className={classnames('About', this.props.className)} style={this.props.style}>
        <h1>
          About
        </h1>
      </div>
    );
  }
}
