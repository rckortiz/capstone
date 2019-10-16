import React, { useState, useEffect } from 'react'
import Header from './Header'
import Nav from './Nav'
import Axios from 'axios'

const Clients = () => {
  const [displayClients, setDisplayClients] = useState([])

  const fetchData = async () => {
    const resp = await Axios.get('https://localhost:5001/api/ClientTable')
    console.log(resp.data)
    setDisplayClients(resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <section className="client-body">
        <Nav />
        <main className="client-container">
          <table>
            <caption>Clients</caption>
            <thead>
              <tr>
                <th id="firstName">First Name</th>
                <th id="lastName">Last Name</th>
                <th id="email">Email</th>
                <th id="phoneNumber">Phone Number</th>
                <th id="description">Description</th>
              </tr>
            </thead>
            <tbody>
              {displayClients.map(client => {
                return (
                  <tr key={client.id}>
                    <td headers="firstName">{client.firstName}</td>
                    <td headers="lastName">{client.lastName}</td>
                    <td headers="email">{client.email}</td>
                    <td headers="phoneNumber">{client.phoneNumber}</td>
                    <td headers="description">{client.description}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </main>
      </section>
    </div>
  )
}

export default Clients
