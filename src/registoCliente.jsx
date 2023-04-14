import { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

function RegistroCliente() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1>Registrar datos del cliente</h1>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicNombres">
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="text" placeholder="Ingrese los nombres" maxLength={50} />
            </Form.Group>

            <Form.Group controlId="formBasicApellidos">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Ingrese los apellidos" maxLength={50} />
            </Form.Group>

            <Form.Group controlId="formBasicTelefono">
              <Form.Label>Teléfono celular</Form.Label>
              <Form.Control type="tel" placeholder="Ingrese el teléfono celular" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingrese el correo electrónico" />
            </Form.Group>
            </Form>
            </Col >
            <Col md={6}>
            <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese la contraseña" />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control type="password" placeholder="Confirme la contraseña" />
            </Form.Group>

            <Form.Group controlId="formBasicDireccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder="Ingrese la dirección" />
            </Form.Group>

            <Form.Group controlId="formBasicDNI">
              <Form.Label>DNI/CI</Form.Label>
              <Form.Control type="number" placeholder="Ingrese el DNI" />
            </Form.Group>

            <Form.Group controlId="formBasicCargo">
              <Form.Label>Cargo</Form.Label>
              <Form.Control as="select" defaultValue="Seleccione el cargo">
                <option>Docente</option>
                <option>Administrativo</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicDepartamento">
              <Form.Label>Departamento</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el departamento" />
            </Form.Group>

            <Form.Group controlId="formBasicFoto">
              <Form.Label>Foto del cliente</Form.Label>
              <Form.Control type="file" onChange={handleImageUpload} accept="image/*" />
              {image && (
                <div>
                  <img src={image} alt="Foto del cliente" width="300" height="300" />
                </div>
              )}
              <Form.Text className="text-muted">
                Suba una foto del cliente (opcional). La foto debe tener un tamaño máximo de 300x300px y un peso máximo de 3 MB.
              </Form.Text>
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

         </Col>
       </Row>
       </div>

       );
    }
       export default RegistroCliente;