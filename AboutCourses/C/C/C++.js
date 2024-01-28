import React, { useState } from 'react';
import './C++.css';

const C_Couese = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., API request, data processing)
    console.log('Form submitted:', { name, email, phoneNumber });
  };

  // Sample syllabus data
  const syllabusData = [
    { week: 1, topic: 'Introduction to C Programming', description: 'Basic concepts and syntax' },
    { week: 2, topic: 'Data Types and Variables', description: 'Understanding data types and variables' },
    // Add more syllabus entries as needed
  ];

  // Course pricing
  const coursePrice = 199.99; // You can customize the price

  return (
    <div className="course-page">
      {/* Course explanation section */}
      <section id="course-explanation">
        <h1>C/C++ Course</h1>
        <p>
          Learn C and C++ programming languages with our comprehensive course. Master the fundamentals and
          advance your skills in system programming, game development, and more.
        </p>
      </section>

      {/* Syllabus section */}
      <section className="syllabus-section" id="syllabus">
        <h2>Course Syllabus</h2>
        <table className="syllabus-table">
          <thead>
            <tr>
              <th>Week</th>
              <th>Topic</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {syllabusData.map((entry) => (
              <tr key={entry.week}>
                <td>{entry.week}</td>
                <td>{entry.topic}</td>
                <td>{entry.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Price section */}
      <section className="price-section" id="course-price">
        <h2>Course Price</h2>
        <p>The full course is priced at ${coursePrice}</p>
      </section>

      {/* Get in Touch form section */}
      <section className="get-in-touch-section" id="contact-form">
        <h2>Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Format: 123-456-7890"
            required
            className="input-field"
          />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>

      {/* Call-to-Action (CTA) section */}
      <section className="cta-section" id="enroll-cta">
        <h2>Ready to start learning?</h2>
        <p>Enroll in our C/C++ course now and unlock your programming potential!</p>
        <button className="enroll-button">Enroll Now</button>
      </section>
    </div>
  );
};

export default C_Couese;
