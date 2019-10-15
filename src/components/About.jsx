import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Excavator from '../images/hdExcavator.jpg'
import Dad from '../images/Dad-profile-pic.jpeg'
import Bro from '../images/bro-photo.jpg'
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <Header />
      <section className="abt-body">
        <Nav />
        <main>
          <section className="abt-image-container">
            <img src={Excavator} />
          </section>
          <article className="about-desc">
            <div className="about-dad">
              <img className="dad-photo" src={Dad} />
              <span>Ricky Ortiz (Founder)</span>

              <p>
                Ricky Ortiz has been in the site developer and general
                contractor for over 25 years. Originally owning a bus business
                in New York City, he moved to Florida and began his career as a
                General Contractor satisfying hundreds of clients with his
                ability to deliver quick and efficient results
              </p>
            </div>
            <div className="about-bro">
              <img className="bro-photo" src={Bro} />
              <span>Michael Ortiz (Co-Founder)</span>
              <p>
                Michael Ortiz is the son of Ricky Ortiz and one of the youngest
                licensed plumbers in the state of Florida. He has worked
                alongside his father for years and is incredibly motivated to
                deliver results to his customers.
              </p>
            </div>
          </article>
        </main>
      </section>
      <Footer />
    </div>
  )
}

export default About
