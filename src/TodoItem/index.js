import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoItem.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function TodoItem(props) {
    return (
      <li className="border rounded mb-1 list-group-item">
       <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onCompleted}
        >
        <i className="bi bi-check"></i>
      </span>
        
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`} >
          {props.activity}
        </p>
        <span className="Icon Icon-delete"
        onClick={props.onDeleted}>
        <i className="bi bi-x"></i>
      </span>
      </li>
  
    );
}

export { TodoItem };