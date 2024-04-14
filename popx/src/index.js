import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateAccountForm from './CreateAccountForm';

import SignInForm from './SignInForm';
import AccountSettings from './AccountSettings';
import FirstPage from './FirstPage';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/create-account" element={<CreateAccountForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));

