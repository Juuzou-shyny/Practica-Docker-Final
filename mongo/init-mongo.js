
db = db.getSiblingDB("my_database");

// Creación de colecciones e inserción de documentos para 'personas'
db.createCollection('personas');
db.personas.insertMany([
  {
    name: "John",
    age: 30,
    email: "john@example.com"
  },
  {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
  }
]);

// Creación de la colección de asignaturas
db.createCollection('asignaturas');
db.asignaturas.insertMany([
    {
        "nombre": "Programación",
        "curso": 1,
        "horas": 8,
        "descripcion": "Desarrollo de aplicaciones en diversos lenguajes de programación."
    },
    {
        "nombre": "Entornos de Desarrollo",
        "curso": 1,
        "horas": 3,
        "descripcion": "Preparación y uso de entornos para el desarrollo de software."
    },
    {
        "nombre": "Bases de Datos",
        "curso": 1,
        "horas": 6,
        "descripcion": "Diseño y gestión de bases de datos."
    },
    {
        "nombre": "Lenguajes de Marcas y Sistemas de Gestión de Información",
        "curso": 1,
        "horas": 4,
        "descripcion": "Utilización de lenguajes de marcas para la representación de información."
    },
    {
        "nombre": "Desarrollo Web en Entorno Cliente",
        "curso": 2,
        "horas": 6,
        "descripcion": "Creación de aplicaciones web en el lado del cliente."
    },
    {
        "nombre": "Desarrollo Web en Entorno Servidor",
        "curso": 2,
        "horas": 6,
        "descripcion": "Creación de aplicaciones web en el lado del servidor."
    },
    {
        "nombre": "Despliegue de Aplicaciones Web",
        "curso": 2,
        "horas": 3,
        "descripcion": "Métodos y tecnologías para el despliegue de aplicaciones web."
    },
    {
        "nombre": "Diseño de Interfaces Web",
        "curso": 2,
        "horas": 4,
        "descripcion": "Principios de diseño y usabilidad para interfaces web."
    }
]);
