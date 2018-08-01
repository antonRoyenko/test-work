import React, { Component } from 'react'
import { AdminPanel, EditMode } from '../containers/index'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={AdminPanel} />
          <Route path="/edit-mode/:id" component={EditMode} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
