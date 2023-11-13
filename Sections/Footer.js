import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="#" className="icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <div className="copyright">
        &copy; 2023 Your Company. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;

