var express = require("express");
var router = express.Router();
var cupcake = require("../models/cupcake.js");

router.get("/", function(req, res) {
  cupcake.selectAll(function(data) {
    var hbsObject = {
      cupcakes: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/addCupcake", function(req, res) {
	//url: /addCupcake/vanilla
	//req.params = { flavor: vanilla}

  cupcake.insertOne(req.body.cupcakeInput, function(data) {
    console.log(data);
    res.redirect("/");
  });
});

router.post("/updateCupcake", function(req, res) {
console.log("Made it here!")
  cupcake.updateEaten(req.body, function(data) {
    console.log(data);
    res.json("/");
  });
});

module.exports = router;