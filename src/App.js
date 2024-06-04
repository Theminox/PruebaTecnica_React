import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const navigate = useNavigate();

  const handleNavigateTo = (ruta) => {
    navigate(ruta);
  };

  return (
    <div className="app-container">
      <h1>Bienvenido a la Gestión de Tareas </h1>
      <nav className="nav-container">
        <button className="nav-button" onClick={() => handleNavigateTo("/login")}>Login</button>
        <button className="nav-button" onClick={() => handleNavigateTo("/tareas")}>Tareas</button>
        <button className="nav-button" onClick={() => handleNavigateTo("/perfil")}>Perfil</button>
      </nav>
    </div>
  );
};

export default App;
