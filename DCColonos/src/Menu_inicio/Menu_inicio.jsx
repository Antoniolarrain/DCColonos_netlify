import React from 'react';
import './style/Menu_inicio.css';
import DCColonosLogo from './DCColonos_logo2.png';
import { Link } from 'react-router-dom';

function Menu_Inicio(){
    return(
        <div class="cuerpo_menui">
            <div class="imagen">
                <img src={DCColonosLogo} alt="imagen_menui" />
            </div>
            <Link to="/menu_principal" onClick={() => setOpen(false)}>
                <div class="boton">
                    <p>JUGAR</p>
                </div>
            </Link>
        </div>
    )
}

export default Menu_Inicio