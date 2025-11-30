import React from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { gens } from '../utils/generationsData'

const NavBar = ({variant = 'header'}) => {
    

    return (
        <>
            <nav className={`nav${variant} navBar`}>
                <NavLink to="/">{variant === 'header' ? '🏠' : 'Home'}</NavLink>
                <NavLink to="/shinyGame">Is it shiny? Choose the gens!</NavLink>
                <NavLink to="/game">Is it shiny? All Pokemon!</NavLink>
                {gens.map(gen => (
                    <NavLink className="gensLinks" key={gen.id} to="/game" state={{gens: [gen]}}>
                        Is it Shiny? {gen.name}
                    </NavLink>
                ))}
                <NavLink to="/stats">Stats</NavLink>
            </nav> 
        </>
    )
}

export default NavBar