import React from "react";
import { Link } from 'react-router-dom'; 
import '../App.css';

function Hero() {
  return (
    <>
      <div className="hero-section-main">
        <div className="hero-content-main">
          <h3 className="hero-heading">Your Journey to Success Begins Here!</h3>
          <p className="hero-subtext">Discover amazing things here.</p>
          <Link to="/products">
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
