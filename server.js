require('dotenv').config();

// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(process.env.PORT || 8080);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index', {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET    
    });
});