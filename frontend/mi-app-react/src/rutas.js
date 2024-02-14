const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/personas', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'personas.html'));
});

app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contacto.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
