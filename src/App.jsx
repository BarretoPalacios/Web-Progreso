// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./componentes/Navbar"

// Importa tus componentes para cada ruta
import Inicio from "./pages/inicio"
import Nosotros from './pages/nosotros';
import Especialidades from './pages/especialidades';
import Servicios from './pages/servicios';
import Contacto from './pages/contacto';

function App() {
  return (
    <Router>
      <div className='flex flex-col'>
        {/* Sidebar */}
        <Navbar />
        <ScrollToTop/>
        {/* Contenido principal */}
        <div >
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}