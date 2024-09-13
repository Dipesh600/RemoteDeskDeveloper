<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './page/LandingPg'; // Assuming LandingPg is also in src/page
import StudentServices from './page/StudentServices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/student-services" element={<StudentServices />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
=======
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
>>>>>>> fdfb567e21d0233cf993bc3508bfb0e2c06af3f8

export default App;
