import React, { useEffect, useState } from 'react';

function Personas() {
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        // Asegúrate de que la URL coincida con tu servidor Express
        fetch('http://localhost:3000/personas')
            .then(response => response.text()) // Cambia .json() por .text() si esperas un string
            .then(data => setMensaje(data)); // Almacena el string en el estado
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1>Página de Personas</h1>
        <p>{mensaje}</p>
    </div>
    );
}

export default Personas;
