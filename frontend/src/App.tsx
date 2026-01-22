import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrideGroom from './pages/BrideGroom';
import OurStory from './pages/OurStory';
import Education from './pages/Education';
import Family from './pages/Family';
import AddFamily from './pages/AddFamily';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-wedding-pink via-wedding-cream to-wedding-lavender">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bride-groom" element={<BrideGroom />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/education" element={<Education />} />
          <Route path="/family" element={<Family />} />
          <Route path="/add-family" element={<AddFamily />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
