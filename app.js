//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let items = [];
let workItems = [];


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

    res.render("list", { listTitle: date, listOfItems: items });
});

app.post("/", function(request, response) {
    let newItem = request.body.newItem;

    if (request.body.listTitle == "work") {
        workItems.push(newItem); //guardando el new item en el array workItems
        //despues de guardar los datos podriamos decir que la pagina se recarga
        response.redirect("/work");
    } else {

        items.push(newItem);
        response.redirect("/");
    }

});


//este es como decir el metodo para cargar la pagina
app.get('/work', function(request, response) {
    let title = 'work';
    response.render("list", { listTitle: title, listOfItems: workItems });
});

app.get("/about", function(req, res) {
    res.render('about');
});


app.listen(3000, function() {
    console.log("Everything ok");
});