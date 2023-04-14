import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function RegistroZonasDeParqueo() {
  const [imagen, setImagen] = useState(null);

  const handleImagen = (e) => {
    setImagen(URL.createObjectURL(e.target.files[0]));
  };
  

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center mb-5">Registro de Zonas de Parqueo</h1>
      <Form className="w-50">
        <Form.Group controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre" maxLength={50} />
        </Form.Group>

        <Form.Group controlId="formBasicNumeroSitios">
          <Form.Label>Número de sitios</Form.Label>
          <Form.Control type="number" placeholder="Ingrese el número de sitios" />
        </Form.Group>

        <Form.Group controlId="formBasicDireccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" placeholder="Ingrese la dirección" />
        </Form.Group>

        <Form.Group controlId="formBasicDescripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Ingrese la descripción" />
        </Form.Group>

        <Form.Group controlId="formBasicFoto">
          <Form.Label>Foto del vehículo</Form.Label>
          <Form.Control type="file" onChange={handleImagen} accept="image/*" />
          {imagen && <img className="mt-3" src={imagen} alt="Foto de la zona de parqueo" width="100%" />}
        </Form.Group>
          
       

        <div className="mt-3 w-100 d-flex justify-content-between align-items-center">
          <Button variant="danger" type="reset">
            Cancelar
          </Button>
          <Button variant="success" type="submit">
            Registrar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default RegistroZonasDeParqueo;