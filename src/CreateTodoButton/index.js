
import React from 'react';
import Button from 'react-bootstrap/Button';
import { TodoContext } from '../TodoContext';



function CreateTodoButton() {

  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <Button className='mt-2' onClick={() => {
      setOpenModal(!openModal)
    }} variant="primary">
      Agregar +
    </Button>
  );
}

export {
  CreateTodoButton
};