import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TodoFormCreate() {
  return (
    <Form>
        <h3 className='text-primary m-0 p-5 text-center'>Crear Nuevo +</h3>
      <Form.Group className='mb-3 border rounded p-5' controlId="formBasicEmail">
        <Form.Label>Nueva actividad</Form.Label>
        <Form.Control className='mb-2' type="text" placeholder="Ingresa actividad nueva" />
        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form.Group>
      
    </Form>
  );
}

export { TodoFormCreate };