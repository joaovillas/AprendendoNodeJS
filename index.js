// var http = require('http');
var app = require('express');
var path = require('path');
// require('express-group-routes');

var express = require('express');
var app = express();





app.get('/',function(req ,res){

    res.sendFile(__dirname+'/index.html');

});

app.get('/teste',function( req , res ){

    res.send('<h1>Rota teste</h1>');

});

app.get("/crawler",function (req,res){

    res.send('aqui está o crawler bro');

});


app.listen(8080 , function(){

    console.log('servidor iniciado na porta 8080');
    

});

