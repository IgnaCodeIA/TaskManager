import React from 'react';
import Button from '@mui/material/Button';
import './AddTaskButton.css';

function AddTaskButton({ onClick }) {
  return (
    <div className="AddTaskButtonContainer">
      <Button
        className="AddTaskButton"
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        Agregar tarea
      </Button>
    </div>
  );
}

export default AddTaskButton;