import React, { useState, useEffect } from 'react';
import './Popup.css'; // Import your CSS file

const Popup = ({ show, onClose, onSubmit }) => {
  return (
    show && (
      <div className="popup">
        <div className="popup-content">
          <div className="close-icon" onClick={onClose}>
            X
          </div>
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            alt="Image"
            className="popup-image"
          />
<form className="popup-form">
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label htmlFor="message">Message:</label>
  <textarea id="message" name="message" rows="4" required />

  <button onClick={onSubmit}>Submit</button>
</form>
        </div>
      </div>
    )
  );
};

const App = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleSubmit = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simulate form submission (logging form data to the console)
    console.log("Form Data:");
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
  
    // You can make an API call or update the state here as needed.
    // For this example, we will just close the popup.
    closePopup();
  };
  
  useEffect(() => {
    // Open the popup after 4 seconds
    const timeoutId = setTimeout(openPopup, 4000);

    return () => {
      // Clear the timeout if the component unmounts
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="app">
      <Popup show={popupVisible} onClose={closePopup} onSubmit={handleSubmit} />
    </div>
  );
};



export default App;
