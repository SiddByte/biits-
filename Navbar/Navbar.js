import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../Assests/biits-removebg-preview (1).png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
        <nav className="navbar">
          <div className="navbar-container">
            <a className="navbar-logo" href="/"><img src={Logo} width="40%" alt="logo"/></a>
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <a  style={{textDecoration: 'none'}} className="/" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link style={{textDecoration: 'none'}} to="/about">
                <a className="nav-link"  href="/about">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{textDecoration: 'none'}} to="/products">
                <a className="nav-link" href="/products">Courses</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{textDecoration: 'none'}} to="/Admission">
                <a className="nav-link" href="/Admission">Admission</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{textDecoration: 'none'}} to="/contact">
                <a className="nav-link" href="/contact">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    
        </>
      );
    };
    
    
export default NavBar;
    