import React, { useState } from 'react';

function Inicio() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
console.log('Usuario:', usuario);
    console.log('Contraseña:', contraseña);
};

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(event) => setUsuario(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={contraseña}
            onChange={(event) => setContraseña(event.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Inicio;