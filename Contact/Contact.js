import React from 'react';
import './contact.css'; 
import Navbar from '../Navbar/Navbar';
import Footer from '../Sections/Footer';
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
            <div className="contact-details">
              <div className="address">
                <p> 2 nd Floor, near TRC, Nagori Garden, <br/> Sindhu Nagar, Shastri Nagar, Bhilwara, <br/> Rajasthan 311001</p>
  
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
              <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833967.5702245007!2d73.8805262891655!3d26.132589253658573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c3cac6dcf105%3A0xbed40f3627c6b932!2sBIITS%20ACADEMY!5e0!3m2!1sen!2sin!4v1700852197934!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
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
