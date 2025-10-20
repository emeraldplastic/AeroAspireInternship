import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 8000,
});

export async function fetchTasks() {
  const res = await API.get("/tasks");
  return res.data; // { ok: true, tasks: [...] }
}
