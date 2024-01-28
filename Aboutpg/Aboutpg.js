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
          Welcome to BIITS Academy, your gateway to a world of coding excellence in Bhilwara! Our institute is dedicated to making programming languages accessible and enjoyable for everyone. As a premier destination for learning, we prioritize not only technical skills but also focus on empowering individuals to become well-rounded programmers. At BIITS, we foster problem-solving, critical thinking, and creativity, ensuring our students are prepared to tackle any coding challenge.

Our friendly and supportive teachers are here to guide you on your coding journey, whether you're a complete beginner or seeking to enhance your existing skills. Join our vibrant community of learners who share the excitement for programming and gain hands-on experience through our interactive classes.

Discover a variety of courses tailored for skill development, designed to cater to individuals dreaming of building their own apps, pursuing a career in IT, or simply exploring the fascinating world of coding. Our institute, located in Bhilwara, is the perfect place to embark on this exciting coding adventure.

Unlock your coding potential at BIITS Academy – where learning is fun, interactive, and transformative. Join us and be part of a community that celebrates the joy of coding!
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
