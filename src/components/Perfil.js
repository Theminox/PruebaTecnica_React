import React, { useEffect, useState } from 'react';
import { MagicMotion } from "react-magic-motion";
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../auth';
import './styles/Perfil.css';
import axios from 'axios'; 

const Perfil = () => {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
      setLoading(false);
    } else {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          const userData = response.data;
          setUser(userData);
          setEditedUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          setLoading(false);
        })
        .catch(err => {
          setError('Error fetching user data');
          setLoading(false);
        });
    }
  }, [navigate]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "city") {
      setEditedUser({
        ...editedUser,
        address: { ...editedUser.address, city: value }
      });
    } else {
      setEditedUser({ ...editedUser, [name]: value });
    }
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  const imageUrl = "https://picsum.photos/150";

  return (
    <MagicMotion>
      <div className="perfil-container">
        <h2>Perfil de Usuario</h2>
        <img src={imageUrl} alt="Avatar" />
        {editing ? (
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" className="custom-input" value={editedUser.name} onChange={handleChange} />
            <input type="email" name="email" className="custom-input" value={editedUser.email} onChange={handleChange} />
            <input type="text" name="phone" className="custom-input" value={editedUser.phone} onChange={handleChange} />
            <input type="text" name="city" className="custom-input" value={editedUser.address.city} onChange={handleChange} />
            <button type="submit">Guardar Cambios</button>
          </form>
        ) : (
          <>
            <p>Nombre: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Teléfono: {user.phone}</p>
            <p>Ciudad: {user.address.city}</p>
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
