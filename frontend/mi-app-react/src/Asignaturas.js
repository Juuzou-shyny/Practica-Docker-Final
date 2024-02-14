import React, { useEffect, useState } from 'react';

function Asignaturas() {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        // Asegúrate de que la URL coincida con tu servidor Express
        fetch('http://localhost:3000/asignaturas')
            .then(response => response.json())
            .then(data => setCursos(data)); // Asegúrate de que el servidor responde con un arreglo de objetos
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <h1>Asignaturas</h1>
            <table style={{ borderCollapse: 'collapse', width: '50%', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Nombre</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Curso</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Horas</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {cursos.map((curso, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{curso.nombre}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{curso.curso}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{curso.horas}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{curso.descripcion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Asignaturas;
