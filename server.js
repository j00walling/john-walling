require('dotenv').config();

// Load Node modules
var express = require('express');

var ejs = require('ejs');

// Initialise Express
var app = express();

// var client_id = process.env.CLIENT_ID;
// var client_secret = process.env.CLIENT_SECRET;
// var redirect_uri = "http://localhost:8080/";

app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(process.env.PORT || 8080);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
}); 