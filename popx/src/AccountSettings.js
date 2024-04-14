import React from 'react';
import './AccountSettings.css';
import profilePicture from './profile-picture.jpg'; // Replace with your actual image file

const AccountSettings = () => {
  return (
    <div className="card">
      <h1 className="heading">Account Settings</h1>
      <div className="profile-container">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <div className="profile-info">
          <h2 className="name">Marry Doe</h2>
          <p className="email">Marry8@gmail.com</p>
        </div>
        
      </div>
      <p className="description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
        Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default AccountSettings;