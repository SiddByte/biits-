import React, { useState, useEffect } from 'react';
import './Popup.css';

const SuccessPopup = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(true);

  useEffect(() => {
    // Reset modal after 3 seconds (you can adjust the timing)
    const timer = setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-icon" onClick={() => setShowSuccessModal(false)}>
              &times;
            </span>
            <h2>Success!</h2>
            <p>Your Admission Form Is Successfully Submited . We Will Contact Your Soon </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessPopup;
