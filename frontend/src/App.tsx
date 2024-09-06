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

export default App;
