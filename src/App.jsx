import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FormAction from './components/FormAction';
import './App.css'; // Import main CSS file for global styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar />

        <div className="content">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/FormAction" element={<FormAction />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
