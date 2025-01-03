import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext(); // Declara el contexto antes de usarlo

const defaultTodos = [
  { text: "Aprender React", completed: true },
  { text: "Practicar JSX", completed: false },
  { text: "Reutilizar componentes", completed: true },
  { text: "Aprender Hooks", completed: false },
  { text: "Aprender Redux", completed: true },
];

function TodoProvider({ children }) {
    const { item: todos, persistItem: persistTodos, loading, error } = useLocalStorage(
      "TODOS_V1",
      defaultTodos
    );
    const [searchText, setSearchText] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);
  
    // Calcula los todos buscados
    const searchedTodos = todos
      ? todos.filter((todo) =>
          todo.text.toLowerCase().includes(searchText.toLowerCase())
        )
      : [];
  
    // Calcula el total de todos y los completados
    const totalTodos = todos.length;
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
  
    const completeTodo = (text) => {
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      persistTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const newTodos = todos.filter((todo) => todo.text !== text);
      persistTodos(newTodos);
    };
  
    const addTodo = (text) => {
      const newTodos = [...todos, { text, completed: false }];
      persistTodos(newTodos);
    };
  
    const openModalFunction = () => setOpenModal(true);
    const closeModalFunction = () => setOpenModal(false);
  
    return (
      <TodoContext.Provider
        value={{
          loading,
          error,
          searchedTodos,
          totalTodos, // Proporciona el total de todos
          completedTodos, // Proporciona los completados
          completeTodo,
          deleteTodo,
          addTodo,
          searchText,
          setSearchText,
          openModal,
          openModalFunction,
          closeModalFunction,
        }}
      >
        {children}
      </TodoContext.Provider>
    );
  }
  
  export { TodoContext, TodoProvider };
  