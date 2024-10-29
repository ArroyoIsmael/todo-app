import React from "react";
import reactDom from "react-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TodoContext } from "../TodoContext";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ModalForm({ children }) {

    const {
        openModal,
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState();

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return reactDom.createPortal(
        <div className="Modal">
            <Modal show={openModal} onHide={() => setOpenModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo ToDo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Control
                                as="textarea"
                                rows={3} // Número de filas visibles en el textarea
                                placeholder="Ingresa ToDo nuevo"
                                value={newTodoValue}
                                onChange={onChange}
                            />
                            {/* <Form.Control
                             value={newTodoText}
                             onChange={(e) => setNewTodoText(e.target.value)}
                             className='mb-2' type="text" placeholder="Ingresa actividad nueva" /> */}
                        </Form.Group>
                        <Row className="mt-2">
                            <Col md={6} className="text-center">
                                <Button className="w-100" onClick={() => {
                                    setOpenModal(!openModal)
                                        }} variant="danger mx-auto" >
                                            Cancelar
                                </Button>
                            </Col>
                            <Col md={6} className="text-center">
                                <Button type="submit" className="w-100" variant="success">
                                    Agregar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </Modal>
            {/* <p>hola</p> */}
        </div>,
        document.getElementById('modal')
    );

}

export { ModalForm };
