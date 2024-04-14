import React from 'react';
import './SignInForm.css';
import { useNavigate } from 'react-router-dom';



const SignInForm = () => {
    const navigate = useNavigate();
    const handleLogin=()=>{
        navigate('./account-settings');
    }
  return (
    <div className="card">
      <h1 className="heading">Signin to your PopX account</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <input
        type="email"
        placeholder="Email Address"
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        className="input"
      />
      <button className="login-btn" onClick={handleLogin} >Login</button>
    </div>
  );
};

export default SignInForm;