import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style/Estadisticas.css';

function Estadisticas(){
    const [open, setOpen] = useState(false);
    return(
        <div className='cuerpo_est'>
            <h1>Usuario</h1>

            <div className='estadist1'>
                <p className='num_jugadas'>Numero de partidas jugadas :</p>
                <p className='est_jugadas'>0</p>
            </div>

            <div className='estadist2'>
                <p className='num_ganadas'>Numero de partidas ganadas:</p>
                <p className='est_ganadas'>0</p>
            </div>

            <div className='botones_est'>
                <li className='boton1_est'>
                    <Link to="/inicio" onClick={() => setOpen(false)}>
                        volver
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default Estadisticas;