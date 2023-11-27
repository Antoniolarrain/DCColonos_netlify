import React from 'react'
import './style/Menup.css'
import imagen_iz from './imagen_izq.png';
import imagen_der from './imagen_der.png';
import { Link } from 'react-router-dom';

function Menup() {
    return(
        <div className='cuerpo'>
            <h1>Menu Principal</h1>

            <div className='Imagenes_p'>
                <img src={imagen_iz} alt="Imagen 1" />
                <img src={imagen_der} alt="Imagen 2" />
            </div>

            <div className='botones'>
                <li className='boton1'>
                    <Link to="/juego" onClick={() => setOpen(false)}>
                        Jugar
                    </Link>
                </li>

                <li className='boton2'>
                    <Link to="/estadisticas" onClick={() => setOpen(false)}>
                        Estadisticas
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default Menup