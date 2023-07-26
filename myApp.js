let express = require('express');
let app = express();
var path = require('path');
console.log("Hello World");
console.log(path.join(__dirname + '/public'));

app.use("/public", express.static(path.join(__dirname + '/public')));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
 // res.send('Hello Express');
});

app.get("/json", function(req, res) {
    res.json({"message": "Hello json"});
});
































 module.exports = app;
