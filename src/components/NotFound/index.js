// src/components/NotFound/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class NotFound extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    return (
      <div className={classnames('NotFound', this.props.className)} style={this.props.style}>
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}
