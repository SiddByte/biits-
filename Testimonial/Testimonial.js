import React from 'react';
import Testimonial from './Testimonial';

const testimonialData = [
  {
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'john-doe.jpg',
  },
  {
    name: 'Jane Smith',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    image: 'jane-smith.jpg',
  },
  
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      {testimonialData.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          text={testimonial.text}
          image={testimonial.image}
        />
      ))}
    </div>
  );
};

export default TestimonialSection;
