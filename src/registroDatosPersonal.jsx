
import React, { useState } from 'react';

function Registrod() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nombre: ${nombre} Apellido: ${apellido} Teléfono: ${telefono}`);
    // Aquí puedes enviar los datos a un servidor o realizar otras acciones con ellos
  };

  return (
    <><form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ marginRight: '20px' }}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
      </div>
      

    </form> <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="Telefono">telefono:</label>
          <input type="text" id="Telefono" name="Telefono" value={nombre} onChange={(e) => setTelefono(e.target.value)} />

        </div>

        <button type="submit">Registrarse</button>
      </div></>
      
  );
}

export default Registrod;