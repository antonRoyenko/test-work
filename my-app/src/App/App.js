import React, { Component } from 'react';
import { AdminPanel } from '../containers/index';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={AdminPanel} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    image: state,
  };
};

export default connect(mapStateToProps)(App);
