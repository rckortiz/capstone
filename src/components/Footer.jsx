import React, { Component } from 'react'
import TwentyYears from '../images/20years.jpg'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="firstFooter">
          <img src={TwentyYears} className="left-icon" />
          <p>License Number: CFC1429952 | CGC1515812</p>
          <ul>
            <li>plumbing</li>
            <li>Septic</li>
            <li>Drain Fields</li>
            <li>Septic Repair</li>
          </ul>
          <img src={TwentyYears} className="right-icon" />
        </footer>
      </div>
    )
  }
}

export default Footer
