import React, { useState } from 'react';
import { MagicMotion } from "react-magic-motion";
import { useNavigate } from 'react-router-dom';
import { login } from '../auth';
import './styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/perfil'); 
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <MagicMotion>
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="input-container">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </MagicMotion>
  );
};

export default Login;
