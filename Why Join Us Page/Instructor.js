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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet justo a odio tincidunt.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet justo a odio tincidunt.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet justo a odio tincidunt.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet justo a odio tincidunt.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet justo a odio tincidunt.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet justo a odio tincidunt.
        </p>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="social-icon">
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

