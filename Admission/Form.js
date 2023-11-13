import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mobile: '',
      dob: '',
      course: 'Select a course',
      institution: '',
      emailError: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, emailError: '' });
  }

  validateEmail = () => {
    const { email } = this.state;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!emailRegex.test(email)) {
      this.setState({ emailError: 'Invalid email address' });
      return false;
    }

    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validateEmail()) {
      // Prepare the email service parameters
      const emailParams = {
        to_email: 'recipient@example.com', // replace with the actual email address
        from_name: this.state.name,
        from_email: this.state.email,
        subject: 'New Form Submission',
        message: `Name: ${this.state.name}\nEmail: ${this.state.email}\nMobile: ${this.state.mobile}\nDOB: ${this.state.dob}\nCourse: ${this.state.course}\nInstitution: ${this.state.institution}`,
      };

      // Send email using emailjs-com
      emailjs.send('service_v7c8xdi', 'template_salrx3j', emailParams, 'nPJUW3uiTKzd2Yia_')
        .then((response) => {
          console.log('Email sent successfully:', response);
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
        });

      // You can also send the form data to your backend as you did before
      fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Failed to send data to the backend', error);
        });
    }
  }

  render() {
    return (
      <div className="container mt-4">
            <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {this.state.emailError && (
              <div className="invalid-feedback">{this.state.emailError}</div>
            )}
          </div>

          <div className="form-group">
            <label>Mobile Number:</label>
            <input
              type="tel"
              className="form-control"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              className="form-control"
              name="dob"
              value={this.state.dob}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Course:</label>
            <select
              className="form-control"
              name="course"
              value={this.state.course}
              onChange={this.handleChange}
            >
              <option value="Select a course" disabled>Select a course</option>
              <option value="C/C++">C/C++</option>
              <option value="JAVA">JAVA</option>
              <option value="Python">Python</option>
              <option value="Flutter">Flutter</option>
              <option value="AI">AI</option>
              <option value="React JS">React Js</option>
            </select>
          </div>

          <div className="form-group">
            <label>College/School:</label>
            <input
              type="text"
              className="form-control"
              name="institution"
              value={this.state.institution}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default MyForm;
