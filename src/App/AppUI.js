import React from 'react';
import Button from 'react-bootstrap/Button';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { ModalForm } from '../ModalForm';

import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
// Estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TodoFormCreate } from '../TodoFormCreate';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { TodoContext } from '../TodoContext';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
  const {
    loading,
    error,
    newValueTodos,
    completeTodo,
    deleteTodo,
    openModal
  } = React.useContext(TodoContext);
  return (
    <>
      <Container>
        <Row>
          {/* <Col>
            <TodoFormCreate />
          </Col> */}
          <Col md={6} className='mx-auto'>

            <TodoCounter
            // completed={completedTodos} total={totalTodos} 
            />

            <TodoSearch
            // searchValue={searchValue}
            // setSearchValue={setSearchValue}
            />
            <TodoList>

              {loading && (
                <>
                  <TodosLoading />
                  <TodosLoading />
                  <TodosLoading />
                </>
              )}

              {error && <TodosError />}

              {
                (!loading && newValueTodos.length === 0)
                && <TodosEmpty />
              }

              {!loading && newValueTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  activity={todo.text}
                  completed={todo.completed}
                  onCompleted={() => completeTodo(todo.text)}
                  onDeleted={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
            <CreateTodoButton />
            { openModal && 
              (
                <ModalForm>
                  La funcion de agregar Todos
                </ModalForm>
              )
            }

          </Col>
        </Row>
      </Container>

    </>
  );
}

export { AppUI };