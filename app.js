/**
 * Created by Lily on 12.09.2015.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var bootstrap = require ('bootstrap')
var app = express();
var expressValidator = require('express-validator');
//var db = require('./db-module');


//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());  //required for Express-Validator

app.use(express.static(path.join(__dirname, 'public')));

// set the views engine to ejs
app.engine('html', require('ejs').renderFile);
app.set('views engine', 'ejs');


app.get('/', function (req, res) {
    res.render('shop.html', 'footer.html', 'header.html');
});

app.get('/usersRegistration', function (req, res) {
    res.render('registrationForm.html', {errors: ""});
});

app.get('/usersEnter', function (req, res) {
    res.render('signIn.html', {errors: ""});
});


app.post('/usersRegistration', function (reg, res) {
    req.assert('firstName', 'First name is required').notEmpty();
    req.assert('lastName', 'Last name is required').notEmpty();
    req.assert('email', 'A valid email is required').isEmail();
    req.assert('password', 'Password is required').notEmpty();
    req.assert('repeatPassword', 'Please retype password').notEmpty();
    req.assert('repeatPassword', 'Passwords do not match').equals(req.body.password);
    var errors = reg.validationErrors();
    if (!errors) {
        console.log("Thank you")
    }
    else {
        res.render('registrationForm.html')
    }
});

app.listen(8080, function () {
    console.log('Server running at http://127.0.0.1:8080/');
});