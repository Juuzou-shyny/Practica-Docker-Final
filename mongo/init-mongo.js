db = db.getSiblingDB("my_database");
db.createCollection('personas');

db.clientes.insertMany([
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