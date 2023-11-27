import React from "react";
import './style/Tablero.css';
import Trigo from './style/trigo.png';
import Oveja from './style/oveja.png';
import Roca from './style/roca.png';
import Tronco from './style/troncos.png';
import Arcilla from './style/arcilla.png';
import VerticeOcupadoImg from './style/vertice_ocupado.png';
import Persona_img from './style/imagen_persona.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Tablero() {
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);


    const NumeroDeVertices = 36;
    const [vertices, setVertices] = useState(Array(NumeroDeVertices).fill(null).map(() => ({ ocupado: false, jugadorId: null })));

    const handleVertexClick = (index) => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const jugadorId = 'tuJugadorId';
        axios.post(`${backendUrl}/comprar/comprar`, { jugadorId, coordenadaId: index })
            .then(response => {
                console.log(response.data);
                
                // Actualiza el estado del vértice cuando se compra el pueblo
                const newVertices = [...vertices];
                newVertices[index] = { ocupado: true, jugadorId };
                setVertices(newVertices);
            })
            .catch(error => {
                console.error(error.response.data);
                setErrorMessage('No es posible comprar esta casilla.');
            });
    };
    


    return (
        <div class="cuerpo">
            <div class="cuerpo_central">
                <div class="mar">
                    
                    <div class="tablero">
                        
                        <div class="casilla trigo"><p id="ficha">5</p>
                            <button className="esquina-btn esquina-superior-izquierda" onClick={() => handleVertexClick(1)}
                            disabled={vertices[1].ocupado}></button>
                            <button className="esquina-btn esquina-inferior-izquierda" onClick={() => handleVertexClick(2)}></button>
                            <button className="esquina-btn esquina-superior-derecha" onClick={() => handleVertexClick(3)}></button>
                            <button className="esquina-btn esquina-inferior-derecha" onClick={() => handleVertexClick(4)}></button>
                        </div>
                        <div class="casilla madera"><p id="ficha">4</p>
                            <button className="esquina-btn esquina-superior-derecha" onClick={() => handleVertexClick(5)}></button>
                            <button className="esquina-btn esquina-inferior-derecha" onClick={() => handleVertexClick(6)}></button>
                        </div>
                        <div class="casilla arcilla"><p id="ficha">6</p>
                            <button className="esquina-btn esquina-superior-derecha" onClick={() => handleVertexClick(7)}></button>
                            <button className="esquina-btn esquina-inferior-derecha" onClick={() => handleVertexClick(36)}></button>
                        </div>
                        <div class="casilla piedra"><p id="ficha">10</p>
                            
                            <button className="esquina-btn esquina-superior-derecha" onClick={() => handleVertexClick(8)}></button>
                            <button className="esquina-btn esquina-inferior-derecha" onClick={() => handleVertexClick(9)}></button>
                        </div>
                        <div class="casilla oveja"><p id="ficha">8</p>
                            
                            <button className="esquina-btn esquina-superior-derecha" onClick={() => handleVertexClick(10)}></button>
                            <button className="esquina-btn esquina-inferior-derecha" onClick={() => handleVertexClick(11)}></button>
                        </div>
                        <div class="casilla arcilla"><p id="ficha">2</p>
                            <button className="esquina-btn esquina-inferior-izquierda" onClick={() => handleVertexClick(12)}></button>
                            <button className="esquina-btn esquina-inferior-derecha" onClick={() => handleVertexClick(13)}></button>
                        </div>
                        <div class="casilla trigo"><p id="ficha">9</p></div>
                        <div class="piedra"><p id="ficha">5</p>
                            <button className="esquina-btn2 esquina-inferior-izquierda2" onClick={() => handleVertexClick(14)}></button>
                            <button className="esquina-btn2 esquina-inferior-derecha" onClick={() => handleVertexClick(15)}></button>
                        </div>
                        <div class="arcilla"><p id="ficha">11</p></div>
                        <div class="piedra"><p id="ficha">3</p>
                            <button className="esquina-btn2 esquina-inferior-izquierda2" onClick={() => handleVertexClick(16)}></button>
                            <button className="esquina-btn2 esquina-inferior-derecha" onClick={() => handleVertexClick(17)}></button>
                        </div>
                        <div class="oveja"><p id="ficha">9</p>
                            <button className="esquina-btn2 esquina-inferior-izquierda2" onClick={() => handleVertexClick(18)}></button>
                            <button className="esquina-btn2 esquina-inferior-derecha" onClick={() => handleVertexClick(19)}></button>
                        </div>
                        <div class="desierto"><p id="ficha">D</p></div>
                        <div class="trigo"><p id="ficha">10</p>
                            <button className="esquina-btn3 esquina-inferior-izquierda3" onClick={() => handleVertexClick(20)}></button>
                            <button className="esquina-btn3 esquina-inferior-derecha3" onClick={() => handleVertexClick(21)}></button>
                        </div>
                        <div class="oveja"><p id="ficha">6</p></div>
                        <div class="madera"><p id="ficha">3</p>
                            <button className="esquina-btn2 esquina-inferior-izquierda2" onClick={() => handleVertexClick(22)}></button>
                            <button className="esquina-btn2 esquina-inferior-derecha" onClick={() => handleVertexClick(23)}></button>
                        </div>
                        <div class="piedra"><p id="ficha">6</p>
                            <button className="esquina-btn2 esquina-inferior-izquierda2" onClick={() => handleVertexClick(24)}></button>
                            <button className="esquina-btn2 esquina-inferior-derecha" onClick={() => handleVertexClick(25)}></button>
                        </div>
                        <div class="arcilla"><p id="ficha">12</p>
                        </div>
                        <div class="madera"><p id="ficha">5</p>
                            <button className="esquina-btn2 esquina-inferior-izquierda2" onClick={() => handleVertexClick(26)}></button>
                            <button className="esquina-btn2 esquina-inferior-derecha" onClick={() => handleVertexClick(27)}></button>
                        </div>
                        <div class="trigo"><p id="ficha">12</p></div>
                        <div class="arcilla"><p id="ficha">4</p>
                            <button className="esquina-btn2 esquina-inferior-izquierda2" onClick={() => handleVertexClick(28)}></button>
                            <button className="esquina-btn2 esquina-inferior-derecha" onClick={() => handleVertexClick(29)}></button>
                        </div>
                        <div class="madera"><p id="ficha">8</p>
                            <button className="esquina-btn2 esquina-inferior-izquierda2" onClick={() => handleVertexClick(30)}></button>
                            <button className="esquina-btn2 esquina-inferior-derecha" onClick={() => handleVertexClick(31)}></button>
                        </div>
                        <div class="oveja"><p id="ficha">2</p></div>
                        <div class="trigo"><p id="ficha">8</p>
                            <button className="esquina-btn3 esquina-inferior-izquierda3" onClick={() => handleVertexClick(32)}></button>
                            <button className="esquina-btn3 esquina-inferior-derecha3" onClick={() => handleVertexClick(33)}></button>
                        </div>
                        <div class="madera"><p id="ficha">9</p></div>
                        <div class="piedra"><p id="ficha">11</p>
                            <button className="esquina-btn2 esquina-inferior-izquierda2" onClick={() => handleVertexClick(34)}></button>
                            <button className="esquina-btn2 esquina-inferior-derecha" onClick={() => handleVertexClick(35)}></button>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}


            <div class="contenedor-tab">
                <div class="elemento-tab">
                    <img class="imagen-tab" src={Persona_img} alt="Imagen 1"/>
                    <p>USUARIO</p>
                </div>
                <div class="elemento-tab">
                    <p className="puntos-en-tab">0</p>
                    <p>PUNTOS</p>
                </div>
                <div class="elemento-tab">
                    <img class="imagen-tab" src={Trigo} alt="Imagen 2"/>
                    <p class="texto-imagen">TRIGO</p>
                </div>
                <div class="elemento-tab">
                    <img class="imagen-tab" src={Arcilla} alt="Imagen 3"/>
                    <p class="texto-imagen-tab">ARCILLA</p>
                </div>
                <div class="elemento-tab">
                    <img class="imagen-tab" src={Oveja} alt="Imagen 4"/>
                    <p class="texto-imagen-tab">OVEJA</p>
                </div>
                <div class="elemento-tab">
                    <img class="imagen-tab" src={Tronco} alt="Imagen 5"/>
                    <p class="texto-imagen-tab">TRONCO</p>
                </div>
                <div class="elemento-tab">
                    <img class="imagen-tab" src={Roca} alt="Imagen 6"/>
                    <p class="texto-imagen-tab">ROCA</p>
                </div>

                <div className="boton_tab_salir">
                <Link to="/inicio" onClick={() => setOpen(false)}>
                    Salir
                </Link>
                </div>

            </div>
        </div>
    );
};

export default Tablero;