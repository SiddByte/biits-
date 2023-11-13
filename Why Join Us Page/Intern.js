import React, { useState, useEffect } from 'react';
import './Internship.css';
import NavBar from '../Navbar/Navbar';
import './Carousek.css';
import Footer from '../Sections/Footer';
import './Hero.css';
import Img0 from '../Assests/BA Payal Sani.jpg';
import Img1 from '../Assests/ShowImage.jpg';

const Internship = () => {
  const [images, setImages] = useState([
    Img0, // Use the imported local image directly
    Img1,
    'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
  ]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Auto-advance the image slider every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <NavBar />
      <div className="landing-page-intern">
        <div className="hero-content">
          <h1>Our Internship Program</h1>
          
          {/* Add the image gallery below */}  
        </div>
      </div>
      <p className='para'>At BIITS Academy , we're on a mission to make a difference in the lives of [briefly describe the beneficiaries or the problem you aim to solve]. We believe that together, we can bring about positive change and create a brighter future..</p>
      <div className="image-gallery">
        <img src={images[currentImage]} alt={`Image ${currentImage}`} />
      </div>
      <Footer />
    </>
  );
};

export default Internship;
