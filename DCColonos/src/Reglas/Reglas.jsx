import React from 'react';
import './style/Reglas.css';
import DCColonosLogo from './DCColonos_logo2.png';

export default function Reglas() {
  return (
    <div className="contenedor">
      <h1>Reglas del juego</h1>

      <div className='Imag'>
        <img src={DCColonosLogo} alt="Imagen_cont" />
      </div>

      <div className='info'>
        <p>1. &nbsp; &nbsp;Se necesitan al menos tres jugadores para comenzar. Una vez que tengamos suficientes jugadores, 
          comenzará la partida y se te asignará un color al azar.</p>

        <p>2.  &nbsp;&nbsp;El tablero se llenará con los diferentes recursos, y cada recurso tiene un número asignado al azar. 
          Por ejemplo, los "bosques" tienen el número 6 y los "trigales" tienen el número 8. Esto es lo que verás en el tablero.</p>

        <p>3.  &nbsp;&nbsp;En tu turno inicial, tendrás la oportunidad de construir un poblado y una carretera (siempre en un vertice y una arista respectivamente).</p>

        <p>4.  &nbsp;&nbsp;Cuando otros jugadores tiren los dados, si el número coincide con una casilla adyacente a tu aldea, obtendrás recursos. 
          Por ejemplo, si tienes una aldea cerca de un bosque con el número 6 y alguien tira un 6, ganas madera.</p>

        <p>5.  &nbsp;&nbsp;En tu turno regular, tirarás dos dados. Si la suma de los dados es 7, ocurre algo especial (como robar recursos de otros jugadores). 
        Si no es 7, obtendrás más recursos según los números en el tablero (explicado en el punto anterior).</p>

        <p>Costos:
          <ul>
            <li>Carretera: 1 recurso MADERA + 1 recurso ARCILLA</li>
            <li>Ciudad: mejorar un pueblo a una ciudad cuesta 3 recursos de PAJA + 2 recursos de HIERRO. Estas entregan el doble de recursos que un 
            poblado.</li>
            <li>Puerto: 1 recurso PAJA + 1 recurso MADERA + 1 recurso PIEDRA + 1 recurso LANA + 1 recursos ARCILLA. 
              Además, cada pueblo debe estar separado por al menos dos caminos de cada poblado o ciudad, ya sea del mismo jugador o de otro </li>
            <li>Carta de desarrollo: 1 recurso de PAJA + 1 recurso de HIERRO + 1 recurso de LANA</li>
          </ul>
        </p>

          
        <p>Obtención de puntos: 
        <ul>
            <li> Mediante cartas de desarrollo (1 pto.) </li>
            <li> Reemplazando un puerto por una ciudad (2 ptos.) </li>
            <li> Teniendo un puerto (1 pto.) </li>
          </ul>
        </p>

        <h3> ¡El primer jugador en llegar a los 10 puntos gana el juego!</h3>
        <h3> ¡Disfrutalo!</h3>
      </div>
    </div>
  )
}
