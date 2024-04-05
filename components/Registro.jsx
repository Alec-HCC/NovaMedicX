import React, { useState } from 'react';

function Registro({ onRegistroCompleto }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
 console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Contraseña:', contraseña);
    // Aquí podrías redirigir al usuario a otra página después de completar el registro
    onRegistroCompleto();
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;