# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### DCColonos 

## Cambios 
- En la entrega 1, teniamos propuesto una especie de Catán muy completo (con demaciadas funcionalidades), por lo que decidimos cambiar algunas cosas: quitamos los intercambios (de cartas y de puertos) que se podían hacer entre los distintos jugadores. Es decir, se dejo lo básico del juego: construcción de puertos, carreteras, ciudades (por los jugadores) dependiendo de los dados y el tablero, y el robo de cartas (que depende del ladrón). 

## Funcionalidades 
Se realizaron todas las páginas estaticas listadas en el enunciado (incluyendo la página del tablero) con react: 

- Acerca de nosotros 
- Contexto (del juego)
- Reglas 
- Iniciar sesión 
- Registrarse (nuevo usuario)
- Menú principal
- Menú de inicio 
- Estadisticas (donde se podrán ver los resultados de las jugadas)
- Barra de navegación
- Tablero 

Cada página tiene su propio css, además de un css común (elementos básicos de todas las páginas). También, se utilizo flex y grid para mejorar algunas funcionalidades, y se intento hacer cada página responsiva. 

## NO se implemento 
No se implemento ninguna funcionalidad que tenga que ver con algun archivo JavaScript :(. 