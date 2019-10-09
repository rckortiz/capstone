import React, { Component } from 'react'

class MyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      FirstName: '',
      LastName: '',
      Email: '',
      PhoneNumber: '',
      Description: ''
    }
  }
  // handleChange = event => {
  //   this.setState({ FirstName: event.target.value }
  //     {LastName: event.target.value})
  // }
  render() {
    return (
      <div>
        <form>
          <h1>Schedule an appointment today!</h1>
          <p>First Name:</p>
          <input type="text"></input>
          <p>Last Name: </p>
          <input type="text" />
          <p>Email: </p>
          <input type="text" />
          <p>Phone Number:</p>
          <input type="text" />
          <p>Enter a description of the reason for your appointment:</p>
          <textarea rows="4" cols="50"></textarea>
        </form>
      </div>
    )
  }
}

export default MyForm
