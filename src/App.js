import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import logo from "./logo.svg";
import "./App.css";

import { ping } from "./redux/modules/ping";
import { loadRepos } from "./redux/modules/repos";

class App extends Component {
  componentDidMount() {
    this.props.loadRepos("xxd3vin");
  }
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
        <div>
          <h1>repos is loading: {String(this.props.repos.loading)}</h1>
          <h1>repo is loading: {String(this.props.repos.repoLoading)}</h1>
          {/*this.props.repos.data.map(repo => (
            <p key={repo.name}>{repo.name}</p>
          ))*/}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isPinging: state.ping.isPinging,
    repos: state.repos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ping: bindActionCreators(ping, dispatch),
    loadRepos: bindActionCreators(loadRepos, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
