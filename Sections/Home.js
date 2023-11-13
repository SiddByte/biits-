import React, { useState, useEffect } from 'react';
import '../App.css';
import './About.css';
import Popup from "../Popup/PopUp";
import NavBar from '../Navbar/Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Why from './Why';
const gridimg1 = require('../Assests/w1.jpg');
const gridimg2 = require('../Assests/w2.jpg');
const gridimg3 = require('../Assests/class6.jpg');
const gridimg4 = require('../Assests/singh2.jpg');


const Home= ()=> {

 const images = [
    {
      id: 1,
      src: gridimg1,
      alt: "Image 1",
      text: "Smart Class Room",
    },
    {
      id: 2,
      src: gridimg2,
      alt: "Image 2",
      text: "Library",
    },
    {
      id: 3,
      src: gridimg3,
      alt: "Image 3",
      text: "Batch System",
    },
    {
      id: 4,
      src: gridimg4,
      alt: "Image 4",
      text: "Regular Classes",
    },
  ];

 


  const [isVisible, setIsVisible] = useState(false);

  // Add a scroll event listener to determine when to show the button
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Function to toggle button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };



  return (
    <>
<NavBar/>
    <Hero/>

    <div className="grid">
      {images.map((image) => (
        <div key={image.id} className="grid-item">
          <img
            src={image.src}
            alt={image.alt}
            className="grid-image"
          />
          <div className="text-overlay">
            <p>{image.text}</p>
          </div>
        </div>
      ))}
    </div>
    

    
          <Why/>

            <About/>


    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      Scroll To Top
    </button>


    <Popup />

    <Footer />
    </>
  );
          
};




export default Home;
