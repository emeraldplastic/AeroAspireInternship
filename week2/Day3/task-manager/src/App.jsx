import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Container, Typography } from "@mui/material";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Dummy fetch effect
  useEffect(() => {
    const fetchTasks = () => {
      const dummyTasks = [
        { id: 1, title: "Learn React", description: "Study React basics" },
        { id: 2, title: "Buy groceries", description: "Milk, Eggs, Bread" },
      ];
      setTimeout(() => setTasks(dummyTasks), 500);
    };
    fetchTasks();
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Task Manager
      </Typography>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </Container>
  );
};

export default App;
