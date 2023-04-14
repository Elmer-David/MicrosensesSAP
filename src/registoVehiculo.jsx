import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";



const RegistroVehiculo = () => {
  const [nombre, setNombre] = useState("");
  const [numPlaca, setNumPlaca] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [foto, setFoto] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleNumPlacaChange = (event) => {
    setNumPlaca(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleFotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setFoto(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu backend o hacer lo que necesites con ellos
  };

  return (
    <div className="container d-flex align-items-center" style={{ height: "100vh" }}>
    <div className="col-lg-6 mx-auto">
      <h1>Registrar vehículo</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nombre" className="mt-4">
            <Form.Label>Nombre y/o Modelo del vehiculo: </Form.Label>
            <Form.Control
            type="text"
            placeholder="Ingresa el nombre del vehículo"
            value={nombre}
            onChange={handleNombreChange}
            maxLength={100}
            minLength={2}
            required
        />
        </Form.Group>

        <Form.Group controlId="numPlaca">
          <Form.Label>Número de placa: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el número de placa"
            value={numPlaca}
            onChange={handleNumPlacaChange}
            maxLength={10}
            minLength={6}
            required
          />
        </Form.Group>
        <Form.Group controlId="descripcion">
          <Form.Label>Descripción: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingresa una descripción del vehículo"
            value={descripcion}
            onChange={handleDescripcionChange}
            maxLength={250}
            minLength={2}
            required
          />
        </Form.Group>

        <Form.Group controlId="foto">
          <Form.Label>Foto</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFotoChange}
            required
          />
        </Form.Group>

        {foto && (
          <Form.Group>
            <Form.Label> Vehivulo:</Form.Label>
            <br />
            <img
              src={foto}
              alt="Preview de la foto del vehículo"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </Form.Group>
        )}

        <Button variant="primary" type="submit" className="mt-4 mr-2">
        Registrar
        </Button>
        <Button variant="secondary" type="button" className="mt-4">
        Cancelar
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default RegistroVehiculo;