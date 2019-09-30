import React, { Component } from 'react'
import Logo from '../images/logo.png'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={Logo}></img>
        </div>
        <h1>"Welcome to OSO development"</h1>
      </div>
    )
  }
}

export default Header
