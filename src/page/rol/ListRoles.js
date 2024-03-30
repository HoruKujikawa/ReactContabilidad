import React, { useState } from 'react'
import Menu from '../../componentes/Menu'

export default function Listrol(){
    const initRoles=[
        {
            id:1,
            rolename: "vendedor",
            rolestate: "activo"
        },
        {
            id:2,
            rolename: "usuario",
            rolestate: "activo"
        },
    ];
    const [rol,setRol]=useState(initRoles);
    
    return (
        <>
        <div><Menu/></div>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nombre del Rol</td>
                        <td>Estado del Rol</td>
                    </tr>
                </thead>
                <tbody>
                    {rol.length>0?(
                        
                        rol.map((el)=>(
                            <>
                            <tr>
                                <td>{el.id}</td>
                                <td>{el.rolename}</td>
                                <td>{el.rolestate}</td>
                            </tr>
                            </>
                        ))
                        
                    ):(
                        <tr>
                            <td>No hay datos registrados</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
        </>
        
    )
}