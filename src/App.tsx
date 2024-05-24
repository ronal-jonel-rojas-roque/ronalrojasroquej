import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import './styles/index.css';
import Briefcase2 from './pages/briefcase/Briefcase2';
import ErrorPage from './components/errorpage/ErrorPage';


function App() {

  return (<div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/briefcase" element={<Briefcase2 />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/error" />} />

    </Routes>
  </div>
  );
}

export default App;