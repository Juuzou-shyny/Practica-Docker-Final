// Menu.js
import React from 'react';

function Menu() {
  const navStyle = {
    position: 'fixed', // Hace que el nav se quede fijo en la parte superior
    top: 0, // Alinea el nav en la parte superior de la pantalla
    width: '100%', // El nav ocupa el ancho completo de la pantalla
    backgroundColor: '#333', // Color de fondo del nav
    color: '#fff', // Color del texto del nav
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Sombra sutil para el nav
    zIndex: 1000, // Asegura que el nav esté por encima de otros elementos
  };

  const ulStyle = {
    listStyleType: 'none', // Quita los estilos de lista por defecto
    margin: 0,
    padding: '10px 0', // Añade padding vertical para darle altura al nav
    textAlign: 'center', // Centra los elementos de la lista
  };

  const liStyle = {
    display: 'inline', // Muestra los elementos de la lista en línea
    margin: '0 15px', // Añade margen horizontal entre los elementos
  };

  const linkStyle = {
    textDecoration: 'none', // Quita el subrayado de los enlaces
    color: '#fff', // Color del texto de los enlaces
    fontSize: '1.2rem', // Tamaño del texto de los enlaces
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><a style={linkStyle} href="/">Home</a></li>
        <li style={liStyle}><a style={linkStyle} href="/personas">Personas</a></li>
        <li style={liStyle}><a style={linkStyle} href="/asignaturas">Asignaturas</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
