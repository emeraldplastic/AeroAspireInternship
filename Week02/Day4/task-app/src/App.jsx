import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import About from "./pages/About";

function NotFound() {
  return (
    <Container sx={{ mt: 4 }}>
      <h2>404 — Page not found</h2>
      <p>The route you requested does not exist.</p>
    </Container>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}
