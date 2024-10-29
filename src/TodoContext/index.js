import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
   
    // const defaultTodos = [
    //     { text: 'Cortar cebolla', completed: true },
    //     { text: 'Tomar el Curso de Intro a React.js', completed: false },
    //     { text: 'Llorar con la Llorona', completed: false },
    //     { text: 'LALALALALA', completed: false },
    //     { text: 'Usar estados derivados', completed: true },
    // ];


    const addTodo = (text) => {
        const newUpdateTodos = [...todos];
        newUpdateTodos.push({
            text,
            completed: false
        });
        
        saveTodos(newUpdateTodos);
    };
    

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    //Estados derivados
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const newValueTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );

    const completeTodo = (text) => {
        const newUpdateTodos = [...todos];
        const todoIndex = newUpdateTodos.findIndex(
            (todo) => todo.text === text
        );
        newUpdateTodos[todoIndex].completed = !newUpdateTodos[todoIndex].completed;
        saveTodos(newUpdateTodos);
    };

    const deleteTodo = (text) => {
        const newUpdateTodos = [...todos];
        const todoIndex = newUpdateTodos.findIndex(
            (todo) => todo.text === text
        );
        newUpdateTodos.splice(todoIndex, 1);
        saveTodos(newUpdateTodos);

    };

    console.log(todos);

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            newValueTodos,
            searchValue,
            setSearchValue,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };