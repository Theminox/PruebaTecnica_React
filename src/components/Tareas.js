import React, { useEffect, useState } from 'react';
import { MagicMotion } from "react-magic-motion";
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../auth';
import './styles/Tareas.css';

const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [editandoTarea, setEditandoTarea] = useState(null);
  const [tituloEditado, setTituloEditado] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    const storedTareas = localStorage.getItem('tareas');
    if (storedTareas) {
      setTareas(JSON.parse(storedTareas));
    }
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleGoToPerfil = () => {
    navigate('/perfil');
  };

  const handleAddTarea = (e) => {
    e.preventDefault();
    if (!nuevaTarea.trim()) return;
    const newTarea = { userId: 1, id: tareas.length + 1, title: nuevaTarea, completed: false };
    const updatedTareas = [...tareas, newTarea];
    setTareas(updatedTareas);
    localStorage.setItem('tareas', JSON.stringify(updatedTareas));
    setNuevaTarea('');
  };

  const handleDeleteTarea = (id) => {
    const updatedTareas = tareas.filter(tarea => tarea.id !== id);
    setTareas(updatedTareas);
    localStorage.setItem('tareas', JSON.stringify(updatedTareas));
  };

  const handleEditTarea = (id, title) => {
    setEditandoTarea(id);
    setTituloEditado(title);
  };

  const handleSaveTarea = (id) => {
    const updatedTareas = tareas.map(tarea =>
      tarea.id === id ? { ...tarea, title: tituloEditado } : tarea
    );
    setTareas(updatedTareas);
    localStorage.setItem('tareas', JSON.stringify(updatedTareas));
    setEditandoTarea(null);
  };

  return (
    <MagicMotion>
      <div className="tareas-container">
        <h2>Lista de Tareas</h2>
        <ul>
          {tareas.map(tarea => (
            <li key={tarea.id}>
              {editandoTarea === tarea.id ? (
                <div>
                  <input
                    className="custom-input"
                    type="text"
                    value={tituloEditado}
                    onChange={(e) => setTituloEditado(e.target.value)}
                  />
                  <button onClick={() => handleSaveTarea(tarea.id)}>Guardar</button>
                </div>
              ) : (
                <div>
                  {tarea.title}
                  <button onClick={() => handleEditTarea(tarea.id, tarea.title)}>Editar</button>
                  <button onClick={() => handleDeleteTarea(tarea.id)}>Eliminar</button>
                </div>
              )}
            </li>
          ))}
        </ul>
        <form onSubmit={handleAddTarea}>
          <input
            className="custom-input"
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Ingrese una nueva tarea"
          />
          <button type="submit">Agregar Tarea</button>
        </form>
        <button onClick={handleGoToPerfil}>Ir a Perfil</button>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </MagicMotion>
  );
};

export default Tareas;
