import React from 'react'
import Header from './Header'
import Nav from './Nav'
import MyForm2 from './MyForm2'

const ContactUs = () => {
  return (
    <div>
      <Header />
      <section className="contact-body">
        <Nav />
      </section>
      <main className="scheduler-body">
        <MyForm2 />
      </main>
    </div>
  )
}

export default ContactUs
