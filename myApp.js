let express = require('express');
let app = express();
var path = require('path');
console.log("Hello World");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
 // res.send('Hello Express');
});


































 module.exports = app;
