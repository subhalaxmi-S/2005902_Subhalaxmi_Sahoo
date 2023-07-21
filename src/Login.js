// Login.js
import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [companyName, setCompanyName] = useState('');
  const [clientID, setClientID] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    login(companyName, clientID, ownerName, ownerEmail, rollNo, clientSecret);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        <input type="text" placeholder="Client ID" value={clientID} onChange={(e) => setClientID(e.target.value)} />
        <input type="text" placeholder="Owner Name" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
        <input type="text" placeholder="Owner Email" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} />
        <input type="text" placeholder="Roll No" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
        <input type="text" placeholder="Client Secret" value={clientSecret} onChange={(e) => setClientSecret(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
