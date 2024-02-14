const client = require('prom-client');
const express = require('express');
const server = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');

server.use(cors());

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

const counterHomeEndpoint = new client.Counter({
    name: 'counterHomeEndpoint',
    help: 'The total number of processed requests'
});

const counterMessageEndpoint = new client.Counter({
    name: 'counterMessageEndpoint',
    help: 'The total number of processed requests to get endpoint'
});

// MongoDB connection string
const uri = "mongodb://admin:pass@mongodb:27017/admin?authSource=admin";
const clientMongo = new MongoClient(uri);

async function getPeople() {
    try {
        await clientMongo.connect();
        const database = clientMongo.db("my_database");
        const personas = database.collection("personas");
        return await personas.find({}).toArray();
    } finally {
        await clientMongo.close();
    }
}
async function getAsignaturas() {
    try {
        await clientMongo.connect();
        const database = clientMongo.db("my_database");
        const asignaturas = database.collection("asignaturas");
        return await asignaturas.find({}).toArray();
    } finally {
        await clientMongo.close();
    }
}

server.get('/hola', async (req, res) => {
    counterMessageEndpoint.inc();
    res.send('Hello World');
});

server.get('/asignaturas', async (req, res) => {
    counterMessageEndpoint.inc();
    try {
        const listaAsignaturas = await getAsignaturas();
        res.json(listaAsignaturas);
    } catch (e) {
        res.status(500).send("Error al obtener asignaturas: " + e.message);
    }
});

server.get('/personas', async (req, res) => {
    counterMessageEndpoint.inc();
    try {
        const listaPersonas = await getPeople();
        res.json(listaPersonas);
    } catch (e) {
        res.status(500).send("Error al obtener personas: " + e.message);
    }
});

server.listen(3000, () => console.log('Server listening to 5000, metrics exposed on /metrics endpoint'));