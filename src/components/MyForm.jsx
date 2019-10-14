import React, { Component } from 'react'
import axios from 'axios'

class MyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      description: ''
    }
  }
  // handleSubmit = event => {
  //   event.preventDefault()
  //   console.dir(this.refs.name.value)
  // }

  handleFirstName = event => {
    this.setState({ firstName: event.target.value })
  }

  handleLastName = event => {
    this.setState({ lastName: event.target.value })
  }

  handleEmail = event => {
    this.setState({ email: event.target.value })
  }
  handlePhoneNumber = event => {
    this.setState({ phoneNumber: event.target.value })
  }
  handleDescription = event => {
    this.setState({ description: event.target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const resp = await axios.post('https://localhost:5001/api/ClientTable')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Schedule an appointment today!</h1>
          <p>First Name:</p>
          <input
            type="text"
            placeholder="First Name"
            onChange={this.handleFirstName}
            value={this.state.firstName}
          />
          <p>Last Name: </p>
          <input
            type="text"
            placeholder="Last Name"
            onChange={this.handleLastName}
            value={this.state.lastName}
          />
          <p>Email: </p>
          <input
            type="text"
            placeholder="Email"
            onChange={this.handleEmail}
            value={this.state.email}
          />
          <p>Phone Number:</p>
          <input
            type="text"
            placeholder="PhoneNumber"
            onChange={this.handlePhoneNumber}
            value={this.state.phoneNumber}
          />
          <p>Enter a description for your appointment:</p>
          <textarea
            value={this.state.description}
            onChange={this.handleDescription}
            rows="4"
            cols="50"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default MyForm
