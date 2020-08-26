const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const https = require("https"); 
//this is to make requests to others servers
// const { STATUS_CODES } = require("http");
const app = express();

app.use("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.listen(3000, function() {
    console.log("Everything ok")
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});