// src/App.js
import React from 'react';
import Navbar from './route/nav'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Gallery from './pages/gallary';
import InputForm from './pages/InputQueue';
import DataDisplay from './pages/ShowDataQueue';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dataDisplay" element={<DataDisplay />} />
        <Route path="/JobQueue" element={<InputForm />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
