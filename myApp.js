let express = require('express');
let app = express();
console.log("Hello World");

absolutePath = __dirname + '/views/index.html'

app.get("/", function(req, res) {
    res.sendFile(path);
 // res.send('Hello Express');
});


































 module.exports = app;
