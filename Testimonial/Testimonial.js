// Testimonial.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css';

const Testimonial = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      image: 'https://searchengineland.com/figz/wp-content/seloads/2015/05/sundar-pichai-2-1920-800x450.jpg',
      name: 'Sundar Pichai',
      company: 'Google ',
      position: 'CEO',
      socialIcons: {
        twitter: 'twitter_link_1',
        linkedin: 'linkedin_link_1',
        // Add more social icons as needed
      },
    },
    {
      id: 2,
      image: 'https://searchengineland.com/figz/wp-content/seloads/2015/05/sundar-pichai-2-1920-800x450.jpg',
      name: 'Sundar Pichai',
      company: 'Google ',
      position: 'CEO',
      socialIcons: {
        twitter: 'twitter_link_1',
        linkedin: 'linkedin_link_1',
        // Add more social icons as needed
      },
    },
    // Add more testimonials as needed
  ];

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="testimonial-container">
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <img src={testimonial.image} alt={testimonial.name} />
            <p>{testimonial.name}</p>
            <p>{testimonial.company}</p>
            <p>{testimonial.position}</p>
            <div className="social-icons">
              {testimonial.socialIcons.twitter && (
                <a href={testimonial.socialIcons.twitter} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              )}
              {testimonial.socialIcons.linkedin && (
                <a href={testimonial.socialIcons.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
              {/* Add more social icons as needed */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
