import React, { Component } from 'react'
import LandingPage from './components/LandingPage'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Clients from './components/Clients'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/About" component={About}></Route>
          <Route exact path="/Contact" component={ContactUs}></Route>
          <Route exact path="/Clients" component={Clients}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
