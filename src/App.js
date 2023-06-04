import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Project from './pages/Project';
import Register from './pages/Register';

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/project/:projectNameParam" element={<Project />} />
        </Routes>
    </>
  );
}

export default App;