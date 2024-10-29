import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList(props) {
    return (
      <ul className='pt-3 list-group'>
        { props.children }
      </ul>
    );
}

export {
    TodoList
};