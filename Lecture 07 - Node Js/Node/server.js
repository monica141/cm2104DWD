var express = require('express');
var app = express();
var http = require('http');
var knockknock = require('knock-knock-jokes');

app.get('/', function(req, res){
 res.send("Hello world! by express");
});

app.get('/test', function(req, res){
 res.send("this is route 2");
});

app.get('/joke', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var randomJoke = knockknock();
    res.end(randomJoke)
});

app.get('/add', function(req, res){
    var x = parseInt( req.query.x );
    var y = parseInt( req.query.y );
    res.send("X + Y="+(x+y));
});

app.get('/calc', function(req, res){
    var x = parseInt( req.query.x );
    var y = parseInt( req.query.y );
    var op = req.query.op;
    switch( op ){
        case "add": res.send("X + Y="+(x+y)); break;
        case "sub": res.send("X - Y="+(x-y)); break;
        case "mul": res.send("X x Y="+(x*y)); break;
        case "div": res.send("X / Y="+(x/y)); break;
    }
});

app.use(express.static('public'));

app.get('/getform', function(req, res){
    var name = req.query.name;
    var quest = req.query.quest;
    res.send("Hi "+name+" I am sure you will "+quest) ;
});

app.listen(8080);