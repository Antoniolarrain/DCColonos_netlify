import React from 'react';
import './style/acerca_de.css';
import imagen from './imagen_persona.png';

function Acercade() {
    return(
        <div className="contenedor">
            <div className='foto1'>
                <img src={imagen} alt="Imagen 1" />
                <div className="info">Antonio Larrain: Estudiante de 4to año de Ingeniería Civil. Inscrito en el major de Investigación Operacional
                y minor en Programación, además de titulo en Industrias de la Computación.
                Actualmente cursando el curso de Aplicaciones Web donde se lleva a cabo el proyecto DCColonos.
                </div>    
            </div>

            <div className='foto2'>
                <img src={imagen} alt="Imagen 2" />
                <div className="info">Cynthia Celis: Estudiante de 4to año de College Ciencias Naturales y Matematicas. Cursando el Major de Ingeniería en Sofware. 
                Actualmente cursando el curso de Tecnologías y Aplicaciones Web.  </div>

            </div>

            <div className='foto3'>
                <img src={imagen} alt="Imagen 3" />
                <div className="info">Ignacio Vita: Estudiante de 3er año de Ingeniería Civil. Cursando el major de Ingenería de Software y el
                minor en Ingeniería Industrial. También me encuentro realizando el curso de Tecnologías y Aplicaciones Web, desde donde me
                encuentro desarrollando este proyecto.</div>

            </div>

        </div>
    )
}
export default Acercade