import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { ping } from './ping';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>is pinging: {this.props.isPinging.toString()}</h1>
          <button onClick={this.props.ping}>Start PING</button>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isPinging: state.isPinging
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ping: bindActionCreators(ping, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
