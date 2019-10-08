import React, { Component } from 'react'
import TwentyYears from '../images/20years.jpg'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="firstFooter">
          <p>License Number: CFC1429952 | CGC1515812</p>
          <img src={TwentyYears} />
        </footer>
      </div>
    )
  }
}

export default Footer
