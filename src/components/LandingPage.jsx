import React from 'react'
import { Link } from 'react-router-dom'
import Bear from '../images/bear-photo.jpg'

const LandingPage = () => {
  return (
    <>
      <div>
        <div className="header">
          <div className="logo">
            <img src={Bear}></img>
          </div>
          <h1>"Welcome to OSO development"</h1>
        </div>
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
            <h1>Call us at 999-999-999</h1>
          </div>
        </nav>
        <section className="image-container">
          <p>images go here</p>
        </section>
      </div>
    </>
  )
}

export default LandingPage
