import React, { useState } from 'react'
import Menu from '../../componentes/Menu'

export default function Listmarcas(){
    const initMarks=[
        {
            id:1,
            namemark: "Bosi",
        },
        {
            id:2,
            namemark: "Arturo Calle",
        },
    ];
    const [marca,setMarca]=useState(initMarks);
    
    return (
        <>
        <div><Menu/></div>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nombre de la Marca</td>
                    </tr>
                </thead>
                <tbody>
                    {marca.length>0?(
                        
                        marca.map((el)=>(
                            <>
                            <tr>
                                <td>{el.id}</td>
                                <td>{el.namemark}</td>
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