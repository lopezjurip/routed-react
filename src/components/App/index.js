// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

class App extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    return (
      <div className={classnames('App', this.props.className)} style={this.props.style}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
