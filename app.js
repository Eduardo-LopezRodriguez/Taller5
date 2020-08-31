//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let items = [];


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


//every time something is display on screen is because
//it was sent to it so that we 
app.get("/", function(req, res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: 'numeric',
        month: 'long',
    };
    date = today.toLocaleDateString("en-US", options);

    res.render("list", { weekDay: date, listOfItems: items });
});

app.post("/", function(request, response) {
    let newItem = request.body.newItem;
    items.push(newItem);
    response.redirect("/");
});
app.listen(3000, function() {
    console.log("Everything ok");
});