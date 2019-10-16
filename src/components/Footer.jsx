import React, { Component } from 'react'
import TwentyYears from '../images/20years.jpg'
import PlumbingLogo from '../images/plumbing-logo.jpg'
import Plumbing from '../images/Plumbing.jpg'
import Septic from '../images/Septic-Tank.jpg'
import DrainField from '../images/drain-field.jpg'
import SepticRepair from '../images/septic-repair.jpg'
import GeneralConstruction from '../images/General-Construction.jpg'
import Homepad from '../images/Homepad.jpg'

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
              <li>
                {' '}
                <img src={Plumbing} />
                <br />
                Plumbing Services
              </li>
              <li>
                <img src={Septic} />
                <br />
                Septic Installation
              </li>
              <li>
                <img src={DrainField} />
                <br />
                Drain Field Installation
              </li>
              <li>
                <img src={SepticRepair} />
                <br />
                Septic Repair
              </li>
              <li>
                <img src={GeneralConstruction} />
                <br />
                General Construction
              </li>
              <li>
                <img src={Homepad} />
                <br />
                Homepads
              </li>
            </ul>
          </div>
          <img src={TwentyYears} className="right-icon" />
        </footer>
      </div>
    )
  }
}

export default Footer
