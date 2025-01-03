import React from "react";
import TextField from '@mui/material/TextField';
import './TodoSearch.css';
import { TodoContext } from '../Context/Context';

const TodoSearch = () => {
    const {searchText,setSearchText}
    = React.useContext(TodoContext);
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="TodoSearch">
      <TextField
        id="filled-basic"
        label="Buscar tarea"
        variant="filled"
        placeholder="Aprender React.js"
        fullWidth
        value={searchText}
        onChange={handleChange}
        sx={{
          backgroundColor: '#F9FBFC',
        }}
      />
    </div>
  );
}

export default TodoSearch;