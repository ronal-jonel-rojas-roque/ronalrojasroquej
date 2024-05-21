import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import './styles/index.css';
import Briefcase2 from './pages/briefcase/Briefcase2';
/* import Briefcase from './pages/briefcase/Briefcase';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog'; */

function App() {
  return (<div>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/home" Component={Home} />
      <Route path="/briefcase" Component={Briefcase2} />

      {/* <Route path="/about" Component={About} />
      <Route path="/experience" Component={Experience} />
      <Route path="/contact" Component={Contact} />
      <Route path="/blog" Component={Blog} /> */}
    </Routes>
  </div>
  );
}

export default App;