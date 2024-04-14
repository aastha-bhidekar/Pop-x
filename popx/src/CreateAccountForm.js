

// App.js
import React, { useState } from 'react';
import './CreateAccountForm.css';
import { useNavigate } from 'react-router-dom';

function CreateAccountForm() {
  const [isAgency, setIsAgency] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate('./account-settings');
  };

  return (
    <div className="container">
      <h1>Create your PopX account</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name*" defaultValue="Marry Doe" />
        <input type="text" placeholder="Phone number*" defaultValue="Marry Doe" />
        <input type="email" placeholder="Email address*" defaultValue="Marry8@gmail.com" />
        <input type="password" placeholder="Password*" defaultValue="Marry Doe" />
        <input type="text" placeholder="Company name" defaultValue="Marry Doe" />
        <div className="radio-group">
          <label>Are you an Agency?*</label>
          <div className="agency">
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={isAgency}
              onChange={() => setIsAgency(true)}
            />
            <label>Yes</label>
          </div>
          <div className="agency">
            <input
              type="radio"
              name="agency"
              value="no"
              checked={!isAgency}
              onChange={() => setIsAgency(false)}
            />
            <label>No</label>
          </div>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccountForm;