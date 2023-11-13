import React from 'react';
import './contact.css'; // Make sure your CSS file is properly linked
import Navbar from '../Navbar/Navbar';
import Footer from '../Sections/Footer';
import { Form } from 'react-router-dom';
import Form1 from './Form';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Navbar />
      <div className="hero-section">
        <h1 className="hero-heading">Contact Us</h1>
      </div>
      <div className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            {/* <div className="map"> */}
              {/* Add your map component/library here */}
              {/* Example: <GoogleMapComponent /> */}
            {/* </div> */}
            <div className="contact-details">
              <div className="address">
                <p>123 Main Street</p>
                <p>City, State, ZIP Code</p>
              </div>
              <div className="phone">
                <p>Phone: +91 6377989054</p>
                <button className="call-button" onClick={() => window.location.href = 'tel:+916377989054'}>
                  Call Us
                </button>
              </div>
              <div className="email">
              <a href='mailto:biitsAcedemy48@gmail.com'>  <p>Email: biitsacademy48@gmail.com</p> </a>
              <button className="call-button" onClick={() => window.location.href = 'mailto:biitsAcedemy48@gmail.com'}>
                  Mail TO
                </button>
              </div>
              {/* <div className="working-hours">
                <p>Working Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
              </div> */}
            </div>
          </div>
          <div className="contact-form">
            <Form1/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
