import React, { useState, useEffect } from 'react';
import './EmailPopup.css'; // Import the CSS

function EmailPopup({ onClose }) {
  const [emailInput, setEmailInput] = useState('');
  const [emails, setEmails] = useState([]);

  // Load emails from local storage when component mounts
  useEffect(() => {
    const savedEmails = JSON.parse(localStorage.getItem('emails'));
    if (savedEmails) {
      setEmails(new Set(savedEmails));
    }
  }, []);

const handleSubmit = (e) => {
  e.preventDefault();
  if (validateEmail(emailInput)) {
    fetch('https://intense-shore-75399-ddf01941b578.herokuapp.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailInput }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response data:', data);
      if (data.success) {
        setEmailInput('');
        onClose(); // Close the popup after successful submission
      } else {
        alert('An error occurred. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    });
  } else {
    alert('Please enter a valid email address');
  }
};

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="email-popup">
      <button className="close-button" onClick={onClose}>Close</button>
      <div className="email-popup-content">
        <br></br>
        <br></br>
        <br></br>
        <h2 className="email-popup-heading">Receive email updates about Velocigraft</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Your email" required value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EmailPopup;