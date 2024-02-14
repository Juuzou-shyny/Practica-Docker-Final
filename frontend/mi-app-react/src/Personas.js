import React, { useEffect, useState } from 'react';

function Personas() {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        // Asegúrate de que la URL coincida con tu servidor Express
        fetch('http://localhost:3000/personas')
            .then(response => response.json())
            .then(data => setPersonas(data)); // Asegúrate de que el servidor responde con un arreglo de objetos
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <h1>Página de Personas</h1>
            <table style={{ borderCollapse: 'collapse', width: '50%', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Nombre</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Edad</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map((persona, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{persona.name}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{persona.age}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{persona.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Personas;
