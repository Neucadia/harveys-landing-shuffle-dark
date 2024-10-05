import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.js";
import EquinePage from "./pages/equine/index.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/equine" element={<EquinePage />} />
    </Routes>
  );
}

export default App;
