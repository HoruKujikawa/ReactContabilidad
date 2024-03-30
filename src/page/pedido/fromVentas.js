/* import React, { useState } from 'react'
import Menu from '../../componentes/Menu'

export default function FromVentas() {
    const [valor,setValor]=useState(0);
    const contar=()=>{
        setValor(valor+1);
    }
    return (
        <>
        <div><Menu/></div>
        <div>FromVentas</div>
        <div>
           <button onClick={contar}>Contar</button>
            {valor}
        </div>
        </>
        
    )
} */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Aplicación de Administración de Libros</h1>
      <hr/>
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de Libros
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Agrega Libro
        </NavLink>
      </div>
    </header>
  );
};

export default Header;