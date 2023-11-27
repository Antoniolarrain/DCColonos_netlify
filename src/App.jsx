import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './comun/NavBar';
import Acercade from "./Acerca_de_nos/Acercade";
import Menup from "./Menu_principal/Menup";
import Estadisticas from "./Estadisticas/Estadisticas";
import Context from "./Contexto/Context";
import Menu_Inicio from "./Menu_inicio/Menu_inicio";
import Registrarse from "./Registro/Registrarse";
import Tablero from "./Juego/Tablero";
import IniciarSesion from "./Iniciar_sesion/Iniciar_sesion";
import Reglas from "./Reglas/Reglas";

function App() {

  return (

    <div className="routing">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/acerca_de" element={<Acercade />}/>
          <Route path="/" element={<Menu_Inicio />}/>
          <Route path="/inicio" element={<Menu_Inicio />}/>
          <Route path="/menu_principal" element={<Menup />}/>
          <Route path="/estadisticas" element={<Estadisticas />}/>
          <Route path="/contexto" element={<Context />}/>
          <Route path="/registrarse" element={<Registrarse />}/>
          <Route path="/juego" element={<Tablero />}/>
          <Route path="/Iniciar_sesion" element={<IniciarSesion />}/>
          <Route path="/Reglas" element={<Reglas/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
