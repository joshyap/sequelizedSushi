var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var PORT = 3000;

var app = express();

// serve static content from the public directory, which is inside the application directory
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/sushi_controller.js");

app.use("/", routes);


app.listen(PORT);
console.log('Listening on port ' + PORT);
