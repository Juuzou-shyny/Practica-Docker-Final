import React, { useEffect, useState } from 'react';

function Hola() {
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/hola')
            .then(response => response.text())
            .then(data => setMensaje(data));
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1>{mensaje}</h1>
        </div>
    );
}

export default Hola;
