import React, { useState } from 'react';
import './FirstPage.css';
import SignInForm from './SignInForm';
import CreateAccountForm from './CreateAccountForm';

const FirstPage = () => {
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);

  const handleLogin = () => {
    setShowSignInForm(true);
    setShowCreateAccountForm(false);
  };

  const handleCreateAccount = () => {
    setShowCreateAccountForm(true);
    setShowSignInForm(false);
  };

  return (
    <div className="container">
      {!showSignInForm && !showCreateAccountForm ? (
        <div className="card">
          <h1 className="heading">Welcome to PopX</h1>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="create-account-btn" onClick={handleCreateAccount}>
            Create Account
          </button>
          <button className="login-btn" onClick={handleLogin}>
            Already Registered? Login
          </button>
        </div>
      ) : showSignInForm ? (
        <SignInForm />
      ) : (
        <CreateAccountForm />
      )}
    </div>
  );
};

export default FirstPage;