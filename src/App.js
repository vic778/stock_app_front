import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Dashboard';
import Portfolio from './Portfolio';
import CreatePortfolio from './CreatePortfolio';

function App() {
  return (
    <div className="App">
    <ToastContainer></ToastContainer>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/create" element={<CreatePortfolio />} />
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
