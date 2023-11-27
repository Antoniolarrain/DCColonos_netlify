import React from 'react';
import './style/Registrarse.css';
import { Link } from 'react-router-dom';

function Registrarse() {
    return (
        <div class="cuerpo_reg">
            <p class="titulo">REGISTRARSE</p>

            <p class="secundario">¿Ya tienes una cuenta? <a class="link" href="/iniciar_sesion">Inicia Sesión</a></p>

            <div class="fila1">
                <div class="izquierdo">
                    <p>Nombre de usuario</p>
                    <input type="text"/>
                </div>
                <div class="derecho">
                    <p>Email</p>
                    <input type="text"/>
                </div>
            </div>

            <div class="fila2">
                <div class="izquierdo">
                    <p>Contraseña</p>
                    <input type="password"/>
                </div>
                <div class="derecho">
                    <p>Confirmar contraseña</p>
                    <input type="password"/>
                </div>
            </div>

            <Link to="/menu_principal" onClick={() => setOpen(false)}>
                <div class="boton">
                    <p>REGISTRARSE</p>
                </div>
            </Link>
        </div>
    );
};

export default Registrarse;