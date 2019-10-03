// import React, { Component } from 'react'
// import Logo from '../images/logo.png'

// class Header extends Component {
//   render() {
//     return (
//       <div className="header">
//         <div className="logo">
//           <img src={Logo}></img>
//         </div>
//         <div className="header-text">
//           <h1>OSO Site Development and Septic</h1>
//           <span>Serving Southwest Florida for over 22 years</span>
//         </div>
//       </div>
//     )
//   }
// }

// export default Header

import React, { Component } from 'react'
import Logo from '../images/logo.png'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} />
        <div className="header-text">
          <h1>OSO Site Development and Septic</h1>
          <span>Serving Southwest Florida for over 22 years</span>
        </div>
      </div>
    )
  }
}

export default Header
