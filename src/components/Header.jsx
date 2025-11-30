import React from 'react'
import NavBar from './NavBar'
import ThemeSwitcher from './ThemeSwitcher'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {


    return (
        <>
            <NavBar variant='header'/>
            <ThemeSwitcher />   
        </>
    )
}

export default Header