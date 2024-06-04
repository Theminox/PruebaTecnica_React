import React, { useEffect, useState } from 'react';
import { MagicMotion } from "react-magic-motion";
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../auth';
import './styles/Perfil.css';

const Perfil = () => {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setEditedUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleGoToTasks = () => {
    navigate('/tareas');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem('user', JSON.stringify(editedUser));
    
    setUser(editedUser);
    
    setEditing(false);
  };

  

  return (
  <MagicMotion>
    <div className="perfil-container">
      <h2>Perfil de Usuario</h2>
      <img src="https://via.placeholder.com/150" alt="Avatar" />
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={editedUser.name} onChange={handleChange} />
          <input type="email" name="email" value={editedUser.email} onChange={handleChange} />
          <input type="text" name="phone" value={editedUser.phone} onChange={handleChange} />
          <input type="text" name="city" value={editedUser.city} onChange={handleChange} />
          <button type="submit">Guardar Cambios</button>
        </form>
      ) : (
        <>
          <p>Nombre: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Telefono: {user.phone}</p>
          <p>Ciudad: {user.city}</p>
          
          <button onClick={handleEdit}>Editar Perfil</button>
          <button onClick={handleGoToTasks}>Ir a Tareas</button>
          <button onClick={handleLogout}>Cerrar Sesión</button>
      
        </>
      )}
    </div>
  </MagicMotion>
  );
};

export default Perfil;
