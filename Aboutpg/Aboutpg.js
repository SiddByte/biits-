import React from 'react';
import './Aboutpg.css';
import NavBar from '../Navbar/Navbar';
import Footer from '../Sections/Footer';
import img1 from '../Assests/w6.png';

const AboutUspg = () => {
  return (
    <>
    <div className="about-us">
        <NavBar/>
      {/* Hero Section */}
      <section className="hero-about">
        <h1>About Us</h1>
      </section>

      {/* Grid Section */}
      <section className="grid">
        <div className="text-content">
          <h2>Our Mission</h2>
          <p>
          Our programming courses are designed to provide you with a solid foundation in programming concepts and languages, including Java, Python, C/C++, and more additional skills such as digital marketing, web development, web designing. Our experienced instructors will guide you through each step of the learning process, offering personalized attention and support to help you achieve your goals. 
These all courses are available with or without a project.

-how does project helps in development or developing you skills stronger.
          </p>
        </div>

        <div className="image-content">
          <img src={img1} alt="About Us" />
        </div>
      </section>
      
    </div>
    <Footer/>
    </>
  );
};

export default AboutUspg;
