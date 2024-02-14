const client = require('prom-client');
const express = require('express');
const server = express();
const cors = require('cors');
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

server.get('/hola', (req, res) => {
    counterHomeEndpoint.inc();
    res.send('Hello world\n');
});

server.get('/personas', (req, res) => {
    counterMessageEndpoint.inc();
    res.send('Estas son las personas');
});

console.log('Server listening to 3000, metrics exposed on /metrics endpoint');
server.listen(3000);