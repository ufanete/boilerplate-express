let dotenv = require('dotenv').config();
let express = require('express');
let app = express();
var path = require('path');
console.log("Hello World");
console.log(path.join(__dirname + '/public'));
console.log(process.env.MESSAGE_STYLE);

app.use("/public", express.static(path.join(__dirname + '/public')));

// execution order matters
app.use(function(req, res, next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

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

app.get("/now", function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({time: req.time});
});

app.get("/:word/echo", function(req, res, next) {
    console.log(req.params);
    res.json({echo: req.params.word});
});

const printQueryParams = function(req, res, next) {
    var result = "";
    for (var param in req.query) {
        result += req.query[param] + " ";
    }

    result = result.trim();
    console.log(result);
    res.json({name: result});
};

app.route("/name").get(printQueryParams).post(printQueryParams);
































 module.exports = app;
