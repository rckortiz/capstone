import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navigationBar">
          <ul>
            <li>
              {' '}
              <Link to="/">Home</Link>
            </li>
            <li>
              {' '}
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
          <div className="phoneNumber">
            <h1>Call us at: </h1>
            <a href="tel:9999999999">999-999-9999</a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
