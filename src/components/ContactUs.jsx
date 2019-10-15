import React from 'react'
import Header from './Header'
import Nav from './Nav'
import MyForm2 from './MyForm2'
import Footer from './Footer'

const ContactUs = () => {
  return (
    <div>
      <Header />
      <section className="contact-body">
        <Nav />
        <div className="form-container">
          <MyForm2 />
        </div>
      </section>
      {/* <main className="scheduler-body">
        <MyForm2 />
      </main> */}
      <Footer />
    </div>
  )
}

export default ContactUs
