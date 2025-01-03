import './TodoItem.css';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <IoCheckmarkDoneSharp 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <TiDelete 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      />
    </li>
  );
}

export {TodoItem};