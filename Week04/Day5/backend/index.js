const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: "Buy groceries" },
  { id: 2, title: "Finish project" }
];

// Root route
app.get("/", (req, res) => {
  res.send("Backend API is running ✅");
});

// Tasks route
app.get("/tasks", (req, res) => {
  res.json({ ok: true, tasks });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
