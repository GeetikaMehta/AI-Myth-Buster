import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AI_Bot from "./components/AI_Bot";
import Health from "./pages/Health";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<AI_Bot />} />
        <Route path="/health" element={<Health />} />
      </Routes>
    </Router>
  );
}

export default App;