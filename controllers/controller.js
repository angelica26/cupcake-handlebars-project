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



module.exports = router;