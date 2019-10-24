import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const MyForm2 = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [description, setDescription] = useState('')
  const [redirect, setRedirect] = useState(false)

  const addClient = async e => {
    e.preventDefault()
    const resp = await axios.post('https://localhost:5001/api/ClientTable', {
      firstName,
      lastName,
      email,
      phoneNumber,
      description
    })
    console.log(resp.data)
    setRedirect(true)
  }

  return (
    <div>
      {redirect ? <Redirect to="/Clients" /> : null}
      <form onSubmit={addClient}>
        <h1>Contact us to schedule an appointment!</h1>
        <p>First Name:</p>

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <p>Last Name:</p>
        <input
          placeholder="Last Name"
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <p>Email:</p>
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <p>Phone Number:</p>
        <input
          placeholder="Phone Number"
          type="text"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
        <p>Description:</p>
        <textarea
          placeholder="please enter a description for your appointment"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows="4"
          cols="50"
        ></textarea>
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default MyForm2
