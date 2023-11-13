import React from 'react';
import './Admission.css';
import NavBar from '../Navbar/Navbar';
import Fotter from '../Sections/Footer';
import MyForm from './Form';



function AdmissionForm() {
  return (
    <>
    <NavBar/>
    <div className="App">
      <div className="hero-section-admission">
        {/* <img src="/path/to/your-bg-image.jpg" alt="Background" className="bg-image" /> */}
        <h1 className="hero-title-admission">Welcome to Our Institute</h1>
      </div>

      <div className="admission-container">
        <div className="left-column">
          <div className="steps">
            <h2>Steps</h2>
            <ol>
              <li>Fill out the admission form.</li>
              <li>Submit the form.</li>
              <li>Wait for admission confirmation.</li>
            </ol>
          </div>

          <div className="description">
            <h2>Description of Admission</h2>
            <p>Our admission process is simple and straightforward. We look forward to having you as a student at our institute.</p>
          </div>

          <div className="about-institute">
            <h2>About Our Institute</h2>
            <p>We are a leading educational institution providing high-quality education to students for many years. Join us and shape your future.</p>
          </div>
        </div>

        <div className="right-column">
          <MyForm/>
        </div>
      </div>
    </div>
    <Fotter/>
    </>
  );
}

export default AdmissionForm;
