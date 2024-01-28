import React from 'react';
import './Instructor.css';
import NavBar from '../Navbar/Navbar';
import Footer from '../Sections/Footer';
import img from '../Assests/Puru.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';



const InstructorPage = () => {
  return (
    <>
    <NavBar/>
    <div className="instructor-page">
      <div className="instructor-info">
      
        <img src={img} alt="Instructor" className="instructor-image" />
        <h1 className="instructor-name">Purshottam Swarnkar</h1>
        <p className="instructor-description">
        At the heart of our academy are the dedicated professionals who guide you through your educational journey. <br/> Our instructors bring a wealth of knowledge as well as industry experience, and also a passion for teaching. <br/> where they believe in practical learning and believe that learning to code should be accessible and enjoyable for everyone. <br/> With a commitment to a supportive learning environment, they go beyond the curriculum to ensure you grasp through concepts thoroughly

         </p>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.facebook.com/pursh.soni?mibextid=ZbWKwL" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://in.linkedin.com/in/purshottam-swarnkar-a100b0a2?original_referer=https%3A%2F%2Fwww.google.com%2F " className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/ps.sir_/" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default InstructorPage;

