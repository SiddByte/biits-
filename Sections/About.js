import React from "react";
import img from '../Assests/w6.png';
import './About.css';


function About(){
  return(
    <>
    <div className="about-us-container">
    <div className="text-container">
      <h2>About Us</h2>
      <p className='homeop'>
      At BIITS Academy, our main focus is making coding fun and accessible. We believe that learning should be enjoyable and provide support for everyone, from beginners to those leveling up their skills.Our programming courses are designed to provide you with a solid foundation in programming concepts and languages, including Java, Python, C/C++, and more additional skills such as digital marketing, web development, web designing. Our experienced instructors will guide you through each step of the learning process, offering personalized attention and support to help you achieve your goals. Joining BIITS means becoming part of a vibrant coding community, whether you're a beginner or seeking skill advancement.</p>
     <a href="https://drive.google.com/file/d/1ISgomdg1r7K-6M21Fi03KfYwD2PjKqK9/view?usp=drive_link"> <button>Learn More</button> </a>
    </div>
    <div className="image-container">
      <img src={img} alt="About Us" />
    </div>
    </div>
    
    </>
  );
}

export default About;
