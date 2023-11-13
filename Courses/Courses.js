import React, { useState } from 'react';
import './Courses.css';
import NavBar from '../Navbar/Navbar';
import Footer from '../Sections/Footer';

const coursesData = [
  { id: 1, title: 'C/C++', description: 'Master In Ambaded Programming With C/C++ With Real Time Projects' },
  { id: 2, title: 'Java ', description: 'Full Stake And Other Java Expert Java Cource Like EE, MicroEdion Etc With Projects' },
  { id: 3, title: 'Python ', description: 'Become A Expert In AI Ml ' },
  { id: 4, title: 'Course 4', description: 'Expand your knowledge.' },
  { id: 5, title: 'Course 5', description: 'Become an expert in this field.' },
  { id: 6, title: 'Course 6', description: 'Your path to success.' },
  { id: 7, title: 'Course 7', description: 'Achieve your goals.' },
  { id: 8, title: 'Course 8', description: 'Unlock your potential.' },
];

const OurCourses = () => {
  const [cart, setCart] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const addToCart = (course) => {
    setCart([...cart, course]);
  };

  const buyNow = (course) => {
    setSelectedCourse(course);
  };

  const closeBuyNow = () => {
    setSelectedCourse(null);
  };

  return (

<>
<NavBar/>
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our E-Learning Platform</h1>
        <p className="hero-subtitle">Unlock Your Potential with Our Courses</p>
        <button className="hero-button">Browse Courses</button>
      </div>
    </div>

    <div>
      <h2 className="courses-heading">Our Courses</h2>
      <div className="course-grid">
        {coursesData.map(course => (
          <div key={course.id} className="course-card">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <p className="course-price">${course.price}</p>
            <div className="buttons">
              <button onClick={() => addToCart(course)}>Add to Cart</button>
              <button onClick={() => buyNow(course)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
      {selectedCourse && (
        <div className="buy-now-modal">
          <h3>You are about to buy {selectedCourse.title}!</h3>
          <p className="course-description">{selectedCourse.description}</p>
          <p className="course-price">${selectedCourse.price}</p>
          <div className="buttons">
            <button onClick={closeBuyNow}>Cancel</button>
            <button onClick={() => alert(`Thank you for purchasing ${selectedCourse.title}!`)}>Confirm Purchase</button>
          </div>
        </div>
      )}
      <div className="cart">
        <h3>Shopping Cart</h3>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default OurCourses;