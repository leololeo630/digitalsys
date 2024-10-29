import React from 'react';
import Formulario from './pages/formulario'
import Login from './pages/login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

          <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App;
