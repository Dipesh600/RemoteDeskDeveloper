import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./page/LandingPg";
import ProjectTemplate from "./page/cornerStudent";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project-template" element={<ProjectTemplate />} />
      </Routes>
    </Router>
  );
};

export default App;
