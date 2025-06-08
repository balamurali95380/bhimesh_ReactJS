import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../auth';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // set fake auth to true
    navigate('/dashboard'); // redirect
  };

  return (
    <div>
      <h2>🔐 Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
