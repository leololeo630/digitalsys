import React from 'react';
import Formulario from './components/formulario'
import Login from './pages/login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pages/login" element={<Login />} />

          <Route path="/components/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App;
