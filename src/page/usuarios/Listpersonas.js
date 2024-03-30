import React, { useState } from 'react'
import Menu from '../../componentes/Menu'

export default function Listpersonas(){
    const initPeople=[
        {
            id:1,
            name: "persona1",
            lastName: "ejemplo1",
            telephone: "12345",
            direction: "carrera ej1",
            birthdate: "15-06-2005",
            email: "ejemplo1@gmail.com",
            state: "estado ej1",
            type: "tipo ej1",
            password: "contraseña1"

        },
        {
            id:2,
            name: "persona2",
            lastName: "ejemplo2",
            telephone: "67890",
            direction: "carrera ej2",
            birthdate: "16-06-2005",
            email: "ejemplo2@gmail.com",
            state: "estado ej2",
            type: "tipo ej2",
            password: "contraseña2"
        },
    ];
    const [db,setDb]=useState(initPeople);
    
    return (
        <>
        <div><Menu/></div>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Telefono</td>
                        <td>Direccion</td>
                        <td>FechaNacimiento</td>
                        <td>Email</td>
                        <td>Estado</td>
                        <td>TipoUsuario</td>
                        <td>Contraseña</td>
                    </tr>
                </thead>
                <tbody>
                    {db.length>0?(
                        
                        db.map((el)=>(
                            <>
                            <tr>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.lastName}</td>
                                <td>{el.telephone}</td>
                                <td>{el.direction}</td>
                                <td>{el.birthdate}</td>
                                <td>{el.email}</td>
                                <td>{el.state}</td>
                                <td>{el.type}</td>
                                <td>{el.password}</td>
                            </tr>
                            </>
                        ))
                        
                    ):(
                        <tr>
                            <td>No hay datos</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
        </>
        
    )
}