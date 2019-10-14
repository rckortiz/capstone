import React, { Component } from 'react'
import TwentyYears from '../images/20years.jpg'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="firstFooter">
          <img src={TwentyYears} className="left-icon" />
          <span>License Number: CFC1429952 | CGC1515812</span>
          <p>Services We Provide</p>
          <div className="services">
            <ul>
              <li>Plumbing</li>
              <li>Septic Installation</li>
              <li>Drain Field Installation</li>
              <li>Septic Repair</li>
              <li>General Construction</li>
              <li>Homepads</li>
            </ul>
            <ul>
              <li>djjdjd</li>
              <li>sldjfjd</li>
            </ul>
          </div>
          <img src={TwentyYears} className="right-icon" />
        </footer>
      </div>
    )
  }
}

export default Footer
