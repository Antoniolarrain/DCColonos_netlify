import React from 'react';
import './style/iniciar.css'; 
import { Link } from 'react-router-dom';

function IniciarSesion() {
  return (
    <div className="cuerpo_iniciar_sesion">
      <p className="titulo">INICIAR SESIÓN</p>

      <div className="formulario">
        <div className="campo">
          <p>Nombre de usuario</p>
          <input type="text" />
        </div>
        <div className="campo">
          <p>Contraseña</p>
          <input type="password" />
        </div>
      </div>

      <Link to="/menu_principal">
        <div className="boton">
          <p>INICIAR SESIÓN</p>
        </div>
      </Link>

      <p className="secundario">
        ¿Aún no tienes una cuenta?{' '}
        <Link className="link" to="/registrarse">
          Regístrate
        </Link>
      </p>
    </div>
  );
}

export default IniciarSesion;
