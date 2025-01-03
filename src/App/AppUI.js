import React from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import AddTaskButton from "../components/AddTaskButton/AddTaskButton";
import TodoSearch from "../components/TodoSearchvMU/TodoSearch";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";
import { TodoLoading } from "../components/TodoLoading/TodoLoading";
import { TodoContext } from "../components/Context/Context";
import { Modal } from "../Modal/Modal";
import AddTaskForm from "../components/AddTaskForm/AddTaskForm";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    addTodo,
    openModalFunction,
    closeModalFunction,
  } = React.useContext(TodoContext);

  const handleAddTask = (taskText) => {
    addTodo(taskText); 
    closeModalFunction(); 
  };
  

  return (
    <>
      <HeaderTitle />
      <TodoCounter />
      <TodoSearch />
      {loading && <TodoLoading />}
      {error && <p>Hubo un error...</p>}
      {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}
      <TodoList>
        {!loading &&
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
      </TodoList>
      <AddTaskButton onClick={openModalFunction} />
      {openModal && (
        <Modal>
          <AddTaskForm onAddTask={handleAddTask} onClose={closeModalFunction} />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
