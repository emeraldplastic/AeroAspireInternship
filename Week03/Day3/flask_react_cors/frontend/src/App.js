import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [recentTasks, setRecentTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const API_URL = "http://127.0.0.1:5000/tasks";

  // Fetch all tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async () => {
    if (!title.trim()) return alert("Task title cannot be empty");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error.error);
      } else {
        const newTask = await res.json();
        setTitle("");
        setRecentTasks([newTask, ...recentTasks].slice(0, 5)); // keep last 5 tasks
        fetchTasks();
      }
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (res.ok) {
        setRecentTasks(recentTasks.filter((t) => t.id !== id));
        fetchTasks();
      }
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  // Toggle completion
  const toggleCompleted = async (task) => {
    try {
      const res = await fetch(`${API_URL}/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed }),
      });
      if (res.ok) fetchTasks();
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  // Theme styles
  const theme = {
    background: darkMode ? "#1e1e1e" : "#f5f5f5",
    text: darkMode ? "#f5f5f5" : "#1e1e1e",
    card: darkMode ? "#2c2c2c" : "#ffffff",
    cardHover: darkMode ? "#333" : "#e0e0e0",
    deleteBtn: darkMode ? "#555" : "#d9534f",
    deleteHover: darkMode ? "#777" : "#c9302c",
    completed: darkMode ? "#555" : "#cccccc",
    pending: darkMode ? "#2c2c2c" : "#f0f0f0",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        backgroundColor: theme.background,
        color: theme.text,
        padding: "2rem",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>📝 React Task Manager</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            backgroundColor: theme.card,
            color: theme.text,
            fontWeight: "bold",
          }}
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      {/* Input */}
      <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "8px 0 0 8px",
            border: `1px solid ${theme.cardHover}`,
            backgroundColor: theme.card,
            color: theme.text,
            width: "300px",
            outline: "none",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "0 8px 8px 0",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            backgroundColor: theme.cardHover,
            color: theme.text,
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = theme.card)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = theme.cardHover)}
        >
          Add
        </button>
      </div>

      {/* Columns */}
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {/* Task List */}
        <div style={{ flex: 2 }}>
          <h2 style={{ borderBottom: `1px solid ${theme.cardHover}`, paddingBottom: "0.5rem" }}>All Tasks</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            {tasks.map((task) => (
              <div
                key={task.id}
                style={{
                  backgroundColor: task.completed ? theme.completed : theme.pending,
                  padding: "1rem",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                  cursor: "pointer",
                  transition: "transform 0.2s, background-color 0.2s",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onClick={() => toggleCompleted(task)}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div>
                  <h3
                    style={{
                      margin: "0 0 0.5rem 0",
                      textDecoration: task.completed ? "line-through" : "none",
                      color: task.completed ? "#888" : theme.text,
                    }}
                  >
                    {task.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#aaa" }}>
                    {task.completed ? "✔ Completed" : "⏳ Pending"}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(task.id);
                  }}
                  style={{
                    padding: "0.3rem 0.6rem",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: theme.deleteBtn,
                    color: theme.text,
                    cursor: "pointer",
                    fontSize: "0.8rem",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = theme.deleteHover)}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = theme.deleteBtn)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Tasks */}
        <div style={{ flex: 1, minWidth: "220px" }}>
          <h2 style={{ borderBottom: `1px solid ${theme.cardHover}`, paddingBottom: "0.5rem" }}>Recent Tasks</h2>
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {recentTasks.length === 0 && <p style={{ color: "#888" }}>No recent tasks</p>}
            {recentTasks.map((task) => (
              <div
                key={task.id}
                style={{
                  backgroundColor: theme.card,
                  padding: "0.8rem",
                  borderRadius: "8px",
                  color: theme.text,
                  fontSize: "0.9rem",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {task.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
