import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import Faucet from '../images/plumbing-photo-2.jpg'
import Tub from '../images/plumbing-photo.jpg'
import Header from './Header'
import Nav from './Nav'

const LandingPage = () => {
  return (
    <>
      <div>
        <Header />
        <Nav />
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
