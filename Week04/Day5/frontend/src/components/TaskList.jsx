import React, { useEffect, useState } from "react";
import { fetchTasks } from "../api";

export default function TaskList() {
  const [status, setStatus] = useState("loading");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  async function loadTasks() {
    setStatus("loading");
    try {
      const data = await fetchTasks();
      if (!data.ok) throw new Error(data.message || "API returned error");
      if (!data.tasks || data.tasks.length === 0) setStatus("empty");
      else {
        setTasks(data.tasks);
        setStatus("success");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
      setStatus("error");
    }
  }

  useEffect(() => { loadTasks(); }, []);

  if (status === "loading") return <p>Loading tasks…</p>;
  if (status === "empty") return <p>No tasks found.</p>;
  if (status === "error")
    return (
      <div>
        <p style={{ color: "red" }}>Error: {error}</p>
        <button onClick={loadTasks}>Retry</button>
      </div>
    );

  return (
    <div>
      <h3>Tasks:</h3>
      <ul>
        {tasks.map(t => <li key={t.id}>{t.title} {t.done ? "✅" : ""}</li>)}
      </ul>
      <button onClick={loadTasks}>Refresh</button>
    </div>
  );
}
