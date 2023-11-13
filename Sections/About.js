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
      Our programming courses are designed to provide you with a solid foundation in programming concepts and languages, including Java, Python, C/C++, and more additional skills such as digital marketing, web development, web designing. Our experienced instructors will guide you through each step of the learning process, offering personalized attention and support to help you achieve your goals. 
    These all courses are available with or without a project.
    
    -how does project helps in development or developing you skills stronger.  </p>
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
