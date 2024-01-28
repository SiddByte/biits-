import React, { useState } from 'react';
import './Products.css'; 
import NavBar from '../Navbar/Navbar';
import Footer from '../Sections/Footer';
import Reactimg from '../Assests/React.png';
import cc from '../Assests/c-logo.png';
import Java from '../Assests/java.png';
import Python from '../Assests/Python-Symbol.png';
import webdev from '../Assests/webdev.png';
import AI from '../Assests/AI.png';
import Flutter from '../Assests/flutter.png';
import Ui from '../Assests/UIUX.png';
import C_Couese from '../AboutCourses/C/C/C++';

const courses = [
    {
      id: 1,
      title: 'C/C++',
      description: 'Learn the basics of JavaScript programming.',
      price: '$49.99',
      image: cc,
    },
    {
      id: 2,
      title: 'Advance Java ',
      description: 'A beginner-friendly introduction to React.',
      price: '$59.99',
      image: Java,
    },
    {
        id: 3,
        title: 'Python  ',
        description: 'Learn The Basic And Advance Of Java ',
        price: '$20.9',
        image: Python,
    },
    {
      id: 4,
      title: 'React jS   ',
      description: 'Learn The Basic And Advance Of Python ',
      price: '$20.9',
      image: Reactimg,
    },
    {
      id: 5,
      title: 'Web-Development With Live Projects',
      description: 'Learn Basice To Advance Development ',
      price: '$23.0',
      image: webdev,

    },
    {
      id: 6,
      title: 'AI ',
      description: 'Learn Basice To Advance Development ',
      price: '$23.0',
      image: AI,

    },
    {
      id: 7,
      title: 'Flutter',
      description: 'Learn Basice To Advance Development ',
      price: '$23.0',
      image: Flutter,

    },
    {
      id: 8,
      title: 'UI/UX',
      description: 'Learn Basice To Advance Development ',
      price: '$23.0',
      image: Ui,

    },
    

    // Add more courses here
  ];

const ProductPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openCourseDetails = (course) => {
    setSelectedCourse(course);
  };

  const closeCourseDetails = () => {
    setSelectedCourse(null);
  };

  return (
    <>
    <NavBar />
    <div className="hero-section-course">
        <div className="hero-content-product">
          <h1>Welcome to Our Programming Courses</h1>
          <p>Master the art of coding with our high-quality courses.</p>
        </div>
      </div>


    <div className="product-page">
      <h1>Programming Language Courses</h1>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id} onClick={() => openCourseDetails(course)}>
            <div className="course-card">
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Price: {course.price}</p>
              <button onClick={() => openCourseDetails(course)}>Learn More</button>
            </div>
          </li>
        ))}
      </ul>

      {selectedCourse && (
        <div className="course-details">
          <img src={selectedCourse.image} alt={selectedCourse.title} />
          <h2>{selectedCourse.title}</h2>
          <p>{selectedCourse.description}</p>
          <p>Price: {selectedCourse.price}</p>
          <button onClick={closeCourseDetails}>Close</button>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default ProductPage;
