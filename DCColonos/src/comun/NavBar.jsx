import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './styles/NavBar.css';
import DCColonosLogo from './DCColonos_logo.png';

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">        

      <nav className='nav'>
        <Link to="/" className='logo' onClick={() => setOpen(false)}>
        <img src={DCColonosLogo} alt='Logo' className='logo'></img>
        </Link>

        <ul className="nav-container">

          <li id="inicio">
            <Link to="/inicio" onClick={() => setOpen(false)}>
              INICIO
            </Link>
          </li>

          <li class="reglas">
            <Link to="/reglas" onClick={() => setOpen(false)}>
              REGLAS
            </Link>
          </li>

          <li>
            <Link to="/acerca_de" onClick={() => setOpen(false)}>
              NOSOTROS
            </Link>
          </li>

          <li class="contexto">
            <Link to="/contexto" onClick={() => setOpen(false)}>
              CONTEXTO
            </Link>
          </li>

          <li id="inicio_sesion">
            <Link to="/iniciar_sesion" onClick={() => setOpen(false)}>
              INICIAR SESIÓN
            </Link>
          </li>

          <li>
            <Link to="/registrarse" onClick={() => setOpen(false)}>
              REGISTRARSE
            </Link>
          </li>
        </ul>
      </nav>
  
        
    </header>
  );
};
  
export default NavBar;
  