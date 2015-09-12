/**
 * Created by Lily on 12.09.2015.
 */
var express = require('express');
var bodyParser = require ('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.post('/runDatabaseServer', function(reg, res){
    res.send('Tou sent the name"' + req.body.name + '".')
});

app.listen (8080, function(){
    console.log('Server running at http://127.0.0.1:8080/');
});