import React from 'react';
import { TodoContext } from '../Context/Context';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  const {completedTodos,totalTodos}
   = React.useContext(TodoContext);
  return (

    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
