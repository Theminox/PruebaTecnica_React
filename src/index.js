import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Tareas from './components/Tareas';
import Perfil from './components/Perfil';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/tareas" element={<Tareas />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/" element={<App />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

