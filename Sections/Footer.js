import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="#" className="icon">
          <FaFacebook size={30} />
        </a>
        {/* <a href="#" className="icon">
          <FaTwitter size={30} />
        </a> */}
        <a href="https://www.instagram.com/biits_academy_/" className="icon">
          <FaInstagram size={30} />
        </a>
        {/* <a href="#" className="icon">
          <FaLinkedinIn size={30} />
        </a> */}
        <a href="#" className="icon">
          <FaYoutube size={30} />
        </a>
      </div>
      <div className="copyright">
        &copy; 2023 biits_academy_. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
