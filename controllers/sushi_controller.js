var express = require("express");

var router = express.Router();

// Import the model (sushi.js) to use its database functions.
var sushi = require("../models/sushi.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  sushi.selectAll(function(data) {
    var hbsObject = {
      sushi: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  // sushi.insertOne([
  //   "sushi_name", "devoured"
  // ], [
  //   // req.body.sushi_name, req.body.devoured
  //   req.sushi_name, req.devoured
  // ], function() {
  //   res.redirect("/");
  // });
  var newSushi = req.body;
var cols = ["sushi_name"];
var vals = [req.body.sushi_name];
console.log("New sushi added: " + req.body.sushi_name);
sushi.insertOne(cols, vals, function(results){
  res.redirect("/");
});
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  sushi.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
