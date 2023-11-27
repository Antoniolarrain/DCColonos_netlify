import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style/Context.css';
import DCColonosLogo from './DCColonos_logo2.png';

function Context(){
    const [open, setOpen] = useState(false);
    return(
        <div className='cuerpo_cont'>
            <h1>Contexto</h1>

            <div className='Imagenes_cont'>
                <img src={DCColonosLogo} alt="Imagen_cont" />
            </div>

            <div className='info_cont'>
                <p>El objetivo es ser el primero jugador en alcanzar diez puntos, 
                    estos se obtienen a través de la construcción de pueblos, ciudades 
                    y caminos, así como mediante la recolección y el intercambio de recursos
                    como madera, lana, arcilla, trigo y mineral. El juego implica la 
                    negociación con otros jugadores para obtener los recursos que
                    cada jugador necesite y la toma de decisiones estratégicas para 
                    ubicar los pueblos en lugares estratégicos que permitan obtener 
                    recursos y puntos de manera eficiente y rápida. 
                    A medida que avanzas en DCCOLONOS, puedes enfrentarte a eventos como 
                    el robo de recursos por parte de los demás jugadores, lo que afectará 
                    a la hora de obtener puntos. </p>

                <p>
                    El mundo ficticio de DCCOLONOS tiene forma cuadrada y cuenta 
                    con 25 cuadrados más pequeños que forman este mundo. Cada uno 
                    de los cuadrados más pequeños representa un recurso, los cuales 
                    se dividen en madera, paja, arcilla, piedra y lana, además uno de 
                    estos es el desierto (no es un recurso). Cada cuadrado tiene un 
                    número entre 2 y 12, estos indican que jugadores reciben recursos 
                    en cada turno. Cabe destacar que el mundo de DCCOLONOS es una isla, 
                    por lo que alrededor de esta se encuentra en mar. Algunas de las 
                    casillas en el borde de la isla tendrán el beneficio del puerto, 
                    este beneficio se explicará más adelante.
                </p>

                <p>
                    DCCOLONOS es un juego en donde 3 jugadores asumen el papel 
                    de colonos que tratan de construir y expandir. Los jugadores 
                    recolectan recursos como madera, lana, arcilla, trigo y piedra 
                    para construir caminos, pueblos y ciudades. La estrategia, la 
                    negociación y la suerte juegan un papel crucial, ya que los jugadores 
                    negocian recursos, compiten por ubicaciones estratégicas y buscan 
                    cumplir con el objetivo.  
                </p>
            </div>
        </div>
    )
}

export default Context