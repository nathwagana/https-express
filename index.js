// var express = require('express')
// var fs = require('fs')
// var https = require('https')
// var app = express()

// app.get('/', function (req, res) {
//   res.send('hello world')
// })

// https.createServer({
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// }, app)
// .listen(3000, function () {
//   console.log('Example app listening on port 3000! Go to https://localhost:3000/')
// })

const fs = require('fs');
const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');

const express = require('express');
const https = require('https');
const app = express();
const server = https.createServer({key: key, cert: cert }, app);

app.get('/', (req, res) => { res.send('this is an secure server') });
server.listen(3001, () => { console.log('listening on 3001') });