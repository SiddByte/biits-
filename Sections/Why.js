import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if you're using React Router

function Why() {
  const reasonsToJoin = [
    {
      title: 'Project-Based Learning',
      description: 'Join our fantastic team of professionals dedicated to excellence.',
      buttonText: 'View Projects',
      link: '/project',
    },
    {
      title: 'Valuable Internships',
      description: 'Unlock your potential with numerous growth and development opportunities.',
      buttonText: 'Explore Opportunities',
      link: '/Intership', // Correct the link value
    },
    {
      title: 'Career Placement',
      description: 'Work on cutting-edge projects that challenge and inspire you.',
      buttonText: 'Career',
      link: '/Placement', // Add a correct link value
    },
    {
      title: 'Expert Instructors',
      description: 'Enjoy a healthy work-life balance and a flexible work environment.',
      buttonText: 'Instructor',
      link: '/instructor',
    },
  ];

  return (
    <>
      <div className="why-join-us-about">
        <div className="container-About-why">
          <h2>Why Join Us</h2>
          <div className="grid-container-about">
            {reasonsToJoin.map((reason, index) => (
              <div key={index} className="grid-item-about">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
                <Link to={reason.link}>
                  <button>{reason.buttonText}</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Why; // Correct the export statement
