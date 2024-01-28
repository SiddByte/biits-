// Hero.js
import React from 'react';
import './Hero.css';
import NavBar from '../Navbar/Navbar';
import Footer from '../Sections/Footer';

const projects = [
  {
    id: 1,
    title: 'NotePad',
    description: 'NotePad With GUI In C++ ',
    imageUrl: 'project1.jpg',
  },
  {
    id: 2,
    title: 'Web-site',
    description: 'Website Using HTML , CSS , JS',
    imageUrl: 'project2.jpg',
  },
  {
    id: 3,
    title: 'Vacnition Software',
    description: 'Vacnation Software In Java',
    imageUrl: 'project3.jpg',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description for Project 4',
    imageUrl: 'project4.jpg',
  },
  {
    id: 5,
    title: 'Project 3',
    description: 'Description for Project 3',
    imageUrl: 'project3.jpg',
  },
];

const Project = () => {
  return (
    <>
    <NavBar/>
    <div className="hero-project">
      <div className="hero-content">
        <h1>Welcome to BIITS Academy</h1>
        <p>Your Path to Programming Excellence</p>
        {/* <button className="cta-button">Get Started</button> */}
      </div>
    </div>
          <p className='para'> Explore the world of coding with our academy’s students! 
Here are some of the amazing projects made by them. It is a mix of their creativity and smart ideas. Join us today and start creating your own projects.
Take a look to see what happens when innovative ideas meet a bit of know-how.
</p>
    <div className="project-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button className="view-button">View Project</button>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default Project;
