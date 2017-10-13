//Dependencies...
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//Setting up port, setting up things for express and body-parser
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

//Setting up Handlebars as the view engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing routes and giving server access to them.
var routes = require("./controllers/controller.js");

app.use("/", routes);

//Running the port
app.listen(port);