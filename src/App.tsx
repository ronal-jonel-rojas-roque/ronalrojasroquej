import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import './styles/index.css';
import Briefcase2 from './pages/briefcase/Briefcase2';
import ErrorPage from './components/errorpage/ErrorPage';

function App() {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === '/ronalrojasroquej') {
      window.location.href = '/ronalrojasroquej/home';
    }
  }, [location.pathname]);
  
  return (
    <div>
      <Routes>
        <Route path="/ronalrojasroquej" element={<Home />} />
        <Route path="/ronalrojasroquej/home" element={<Home />} />
        <Route path="/ronalrojasroquej/briefcase" element={<Briefcase2 />} />
        <Route path="/ronalrojasroquej/error" element={<ErrorPage />} />
        <Route path="/ronalrojasroquej/*" element={<Navigate to="/ronalrojasroquej/error" />} />
      </Routes>
    </div>
  );
}

export default App;
