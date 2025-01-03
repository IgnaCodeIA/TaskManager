import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function AddTaskForm({ onAddTask, onClose }) {
  const [taskText, setTaskText] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText);
      onClose(); // Cerrar el modal después de añadir la tarea
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        width: 400,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h6" align="center">
        Agregar Nueva Tarea
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <TextField
          label="Escribe tu tarea aquí"
          variant="outlined"
          fullWidth
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          required
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" color="primary" type="submit">
            Añadir Tarea
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancelar
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default AddTaskForm;
