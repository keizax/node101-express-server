// import files and packages up here
var data = require("./data.json");

// create your express server below
var express = require('express')
var morgan = require('morgan');
var app = express();

// add your routes and middleware below
app.use(morgan('dev'));
app.get('/', function(req, res) {
    res.status(200)
    res.send('first express server');
});
app.get('/', (req, res) => {
        res.send('Hello Express');
    });
app.get("/data", function(req, res) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(data));        
});
// finally export the express application
module.exports = app;
