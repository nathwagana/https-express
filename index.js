const fs = require('fs');
const express = require('express');
const https = require('https');
const routes = require('./src/routes/routes');

const app = express();

const key = fs.readFileSync('./src/components/key.pem');
const cert = fs.readFileSync('./src/components/cert.pem');

const server = https.createServer({key: key, cert: cert }, app);

app.use(routes);
server.listen(3001, () => { console.log('listening on 3001') });