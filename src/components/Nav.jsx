import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactMap from './ReactMap'

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
            <a href="tel:8639832834">863-983-2834</a>
          </div>
          <div className="address">
            <span>Address</span>
            <span>351 Horseclub Ave</span>
            <span>Clewiston, FL 33440</span>
          </div>
          <div className="react-map">
            <ReactMap />
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
