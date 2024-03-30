import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu(){
    return (
        <>
        <div>Menu de ContabilidadApp<br/>
            <div><Link to="/">Personas</Link></div>
            <div><Link to="/Ventas">Ventas</Link></div>
            <div><Link to="/Marcas">Marcas</Link></div>
            <div><Link to="/Roles">Roles</Link></div>
        </div>
        </>
        
    )
}