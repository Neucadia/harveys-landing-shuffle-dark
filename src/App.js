import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.js";
import EquinePage from "./pages/equine/index.js";
import HarveysHorse from "./pages/equine/harveys-horse-10.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/equine" element={<EquinePage />} />
      <Route path="/harveys-horse-10" element={<HarveysHorse />} />
    </Routes>
  );
}

export default App;
