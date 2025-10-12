import React from "react";
import { Typography } from "@mui/material";
import TaskForm from "../components/TaskForm"; // correct relative path

function AddTask() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Add a New Task
      </Typography>
      <TaskForm />
    </div>
  );
}

export default AddTask;
