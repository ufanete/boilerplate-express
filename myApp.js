let dotenv = require('dotenv').config();
let express = require('express');
let app = express();
var path = require('path');
console.log("Hello World");
console.log(path.join(__dirname + '/public'));
console.log(process.env.MESSAGE_STYLE);

app.use("/public", express.static(path.join(__dirname + '/public')));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
 // res.send('Hello Express');
});

app.get("/json", function(req, res) {
    var value = "Hello json";
    if (process.env.MESSAGE_STYLE == "uppercase") {
        value = value.toUpperCase();
    }
    res.json({"message": value});
});
































 module.exports = app;
