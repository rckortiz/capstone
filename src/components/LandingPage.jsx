import React from 'react'
import { Link } from 'react-router-dom'
import Faucet from '../images/plumbing-photo-2.jpg'
import Land from '../images/Land.jpg'
import Central from '../images/central.jpg'
import SkidSteer from '../images/skid-steer.jpg'
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
              <img src={Faucet} alt="" />
              <img src={Land} className="mobile-hide" alt="" />
              <img src={Central} className="mobile-hide" alt="" />
              <img src={SkidSteer} className="mobile-hide" alt="" />
            </section>

            <article className="description-box">
              <div className="description-box-bg">
                <p>
                  Here at OSO Development we take great pride in serving all
                  your site development needs. We've been in the plumbing and
                  site development industry for over 22 years and our team of
                  experienced plumbers and land development experts are here to
                  assist you every step of the way. There's never a job that's
                  too big or too small. Schedule your appointment today!
                </p>{' '}
              </div>
            </article>
          </main>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default LandingPage
