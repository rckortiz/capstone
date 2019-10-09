import React from 'react'
import Header from './Header'
import Nav from './Nav'
import MyForm from './MyForm'

const ContactUs = () => {
  return (
    <div>
      <Header />
      <Nav />
      <main className="scheduler-body">
        <MyForm />
      </main>
    </div>
  )
}

export default ContactUs
