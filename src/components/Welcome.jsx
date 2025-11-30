import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='welcome'>
        <h2>¡Bienvenid@! / Welcome!</h2>
        <p>Esta es mi propuesta para el proyecto del módulo 9 de frontend para la escuela de RockTheCode.</p>
        <p>La idea del proyecto es un juego sencillo donde tienes que identificar si el sprite del Pokemon que se presenta es su variante variocolor o no.</p>
        <p>Está hecho entero en React con uso de la <a href="https://pokeapi.co/">PokeApi</a>. Al visitar el enlace <Link to={"/shinyGame"}>Choose The Gens!</Link> se lanzará un formulario que permitirá escoger con que generaciones de pokemon quieres jugar, además puedes dirigirte a <Link to={"/game"}>Is it Shiny?</Link> para jugar con los 1025 pokemon disponibles en el momento del desarrollo o utilizar tanto la barra de navegación del header como la del footer si prefieres limitar las opciones a una generación en particular.</p>
        <p>Por último en <Link to={'/stats'}> 'stats'</Link>  se presentan estadísticas personalizadas como por ejemplo las partidas jugadas, ganadas o la generación más jugada.</p>
                  <div style={{ height: '3rem' }}></div>
        <p>This page is a little project I made for my formation in React.</p>
        <p>The idea is a small simple game in which you have to determine if the Pokemon in screen is shiny or not.</p>
        <p>The project is full React with use of the <a href="https://pokeapi.co/">PokeApi</a>. By going into <Link to={"/shinyGame"}>Choose The Gens!</Link> you'll be able to select the gens that the pokemon shown come from, there's <Link to={"/game"}>Is it Shiny?</Link> if you just want to launch the game with the full 1025 pokemon that currently exist or find in the header and footer a link to a specific generation.</p>    
        <p>Finally we have <Link to={'/stats'}> 'stats'</Link> to track a few things like games played, games won or the most played generation.</p>
    
    </div>
  )
}

export default Home