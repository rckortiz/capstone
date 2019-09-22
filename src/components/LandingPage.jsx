import React from 'react'
import { Link } from 'react-router-dom'
import Bear from '../images/bear-photo.jpg'
import Faucet from '../images/plumbing-photo-2.jpg'
import Tub from '../images/plumbing-photo.jpg'

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
            <h1>Call us at: </h1>
            <a href="tel:9999999999">999-999-9999</a>
          </div>
        </nav>
        <section className="image-container">
          <img src={Faucet}></img>
        </section>
        <article className="description-box">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            modi architecto. Laboriosam ab, fugiat sapiente aliquid voluptates
            sint nulla! Repellendus blanditiis tempore nobis voluptatem deserunt
            perspiciatis excepturi repudiandae animi repellat!
          </p>
        </article>
      </div>
    </>
  )
}

export default LandingPage
