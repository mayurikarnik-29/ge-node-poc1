var http = require('http');
var express = require('express');

app = express();

var middleware = function (req, res, next) {
    req.middleware = new Date();
    next();
}

app.use(middleware);

//Server without Express
http.createServer(app).listen(8080, function () {
    console.log("server start at port 8080");
});

//Routes
app.get('/', function (req, res) {
    res.header('Content-type', 'text/html');
    res.write(`<h1><a href='/monday'>Monday</a></h1>
        <br>
        <h1><a href='/tuesday'>Tuesday</a></h1>
        <br>
        <h1><a href='/wednesday'>Wednesday</a></h1>
        `);
    res.end();
});

app.get('/monday', function (req, res) {
    res.header('Content-type', 'text/html');
    res.write('<h3>Monday:' + req.middleware + '<h3>');
});

app.get('/tuesday', function (req, res) {
    res.header('Content-type', 'text/html');
    res.write('<h3>Tuesday:' + req.middleware + '<h3>');
});

app.get('/wednesday', function (req, res) {
    res.header('Content-type', 'text/html');
    res.write('<h3>Wednesday:' + req.middleware + '<h3>');
});