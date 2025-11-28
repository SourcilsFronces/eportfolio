import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import EngineeringCourse from './pages/EngineeringCourse';
import InternationalMobility from './pages/InternationalMobility';
import Sustainability from './pages/Sustainability';
import Activities from './pages/Activities';
import Career from './pages/Career';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/engineering" element={<EngineeringCourse />} />
        <Route path="/mobility" element={<InternationalMobility />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  );
}

export default App;
