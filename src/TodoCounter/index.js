import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoContext } from '../TodoContext';


function TodoCounter() {

    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);

    return (
        <h3 className='text-success m-0 p-5 text-center'>
        Has completado <b> { completedTodos } </b> de <b> { totalTodos }</b> TODOs
        </h3>
    );
}

export {
    TodoCounter
};