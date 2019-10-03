import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import Faucet from '../images/plumbing-photo-2.jpg'
import Tub from '../images/plumbing-photo.jpg'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Footer2 from './Footer-2'

const LandingPage = () => {
  return (
    <>
      <div>
        <Header />
        <section className="body">
          <Nav />
          <main>
            <section className="image-container">
              <img src={Faucet}></img>
            </section>
            <article className="description-box">
              <div className="description-box-bg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, modi architecto. Laboriosam ab, fugiat sapiente
                  aliquid voluptates sint nulla! Repellendus blanditiis tempore
                  nobis voluptatem deserunt perspiciatis excepturi repudiandae
                  animi repellat!
                </p>{' '}
              </div>
            </article>
          </main>
        </section>

        <Footer />
        <Footer2 />
      </div>
    </>
  )
}

export default LandingPage
