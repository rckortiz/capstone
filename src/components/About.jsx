import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Excavator from '../images/hdExcavator.jpg'

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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              natus temporibus, sunt reiciendis impedit illum, rerum nulla
              recusandae quod omnis alias odio. Recusandae quia inventore
              consectetur, hic veritatis officiis culpa?
            </p>
          </article>
        </main>
      </section>
    </div>
  )
}

export default About
