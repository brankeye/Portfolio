//Lets require/import the HTTP module
var http = require('http');
var express = require('express');
var app = express();
var path = require('path');

//Lets define a port we want to listen to
const PORT=8080;

app.use(express.static(path.join(__dirname, 'dist')));

//Create a server
var server = app.listen(8080, '0.0.0.0', function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/home', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/work', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/projects', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/projects/:id', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/education', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/skills', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});