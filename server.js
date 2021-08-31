require("dotenv").config();

// Load Node modules
var express = require("express"); // Express web server framework
var request = require("request"); // "Request" library

var ejs = require("ejs");
var app = express();

app.use(express.static(__dirname + "/public"));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Root Route
app.get("/", function (req, res) {
    var client_id = process.env.CLIENT_ID;
    var client_secret = process.env.CLIENT_SECRET;
    res.render("pages/index", {
      client_id:client_id,
      client_secret:client_secret
    });
});

// Port website will run on
app.listen(process.env.PORT || 8888);



