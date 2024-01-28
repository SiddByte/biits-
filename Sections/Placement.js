import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Placement.css';
import NavBar from '../Navbar/Navbar';
import Footer from './Footer';
import HarshitImage from '../Assests/harshtbro.png';
import Raghav from '../Assests/Raghav.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

// Your PlacementPage component
const PlacementPage = () => {
  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Sample student data
  const students = [
    {
      name: 'Harshit Dadhich ',
      companyName: 'Flutter Flow Devs',
      imageUrl: HarshitImage,
      socialMedia: {
        linkedin: '#',
        twitter: '#',
        instagram: 'https://www.instagram.com/harshit.dadhich.20/',
      },
    },
    {
      name: 'Raghav Lahoti',
      companyName: 'Bits Techniques .',
      imageUrl: Raghav,
      socialMedia: {
        linkedin: '#',
        twitter: '#',
        instagram: 'https://www.instagram.com/raghav_lah0ti/',
      },
    },
    // Add more student data as needed
  ];

  return (
    <>
      <NavBar />
      <div className="placement-page">
        {/* Hero Section */}
        <div className="hero-section-place">
          <h1>Welcome to Our Placement</h1>
          <p>Discover Exciting Opportunities to Elevate Your Career</p>
          <p>
          This journey with BIITS Academy not only helps you with learning in-demand programming skills but also opens doors to various career opportunities.We provide personalized career support to guide you through every step of your professional development. Moreover, our commitment extends beyond the classroom. Our dedicated team offers comprehensive assistance, from resumes to preparing you for interviews.
At BIITS Academy, your success is our priority, and we're here to support you in reaching your career goals

          </p>
        </div>

        {/* Carousel Section */}
        {/* <div className="carousel-section">
          <Slider {...carouselSettings}>
            
            <div>
              <img src="carousel-image1.jpg" alt="Carousel Image 1" />
            </div>
            <div>
              <img src="carousel-image2.jpg" alt="Carousel Image 2" />
            </div>
           
          </Slider>
        </div> */}
        

        {/* Student Grid Section */}
        <div className="student-grid">
          <h2>Meet Our Successful Graduates</h2>
          <div className="grid-container">
            {students.map((student, index) => (
              <div key={index} className="grid-item">
                <img src={student.imageUrl} alt={`Student ${index + 1}`} />
                <h3>{student.name}</h3>
                <p>{student.companyName}</p>
                <div className="social-media-links">
                  <a href={student.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href={student.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href={student.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />    
    </>
  );
};

export default PlacementPage;
