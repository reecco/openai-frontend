import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Token from './pages/Token';
import './assets/scss/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/settoken' element={<Token />} ></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
