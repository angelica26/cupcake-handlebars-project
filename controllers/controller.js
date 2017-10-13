var express = require("express");
var router = express.Router();
var cupcake = require("../models/cupcake.js");

router.get("/", function(req, res) {
  cupcake.all(function(data) {
    var hbsObject = {
      cupcake
    }
  })
})


module.exports = router;