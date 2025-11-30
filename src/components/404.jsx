import React from 'react'
import { useLocation } from 'react-router-dom'

const NotFound = () => {
    const location = useLocation();

    return (
        <>
            <h1>Error 404</h1>
            <h3>La ruta <span>{location.pathname}</span> no existe.</h3>
            <p>Por favor, comprueba la ruta o usa el menú</p>
        </>
    )
}

export default NotFound