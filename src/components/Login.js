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
          <h2>Inicio de sesión</h2>
          <div className="input-container">
            <label>Correo:</label>
            <input
              class="custom-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Contraseña:</label>
            <input
              class="custom-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </MagicMotion>
  );
};

export default Login;
