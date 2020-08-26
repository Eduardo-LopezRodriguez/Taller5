const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();

    var day = "";
    switch (currentDay) {

        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        case 7:
            day = "Sunday"
            break;
    }

    res.render("list", { day: day });
});


app.listen(3000, function() {
    console.log("Everything ok")
});