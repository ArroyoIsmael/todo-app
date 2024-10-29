import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoContext } from '../TodoContext';


function TodoSearch() {

    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);

    return (
       <input 
        className="text-center form-control"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value)
        }} 
        placeholder="Search" />

    );
}

export {
    TodoSearch
};
