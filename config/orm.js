var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO ?? SET ?? VALUES ?";
    connection.query(queryString, [table, cols, vals], function(err, result) {
      console.log(result);
    });
  },

  updateOne: function(table, cols, vals, cb) {
    var queryString = "UPDATE ?? SET ?? WHERE ?";
    connection.query(queryString, [table, cols, vals], function(err, result) {
      console.log(result)
    });
  }
};

//exporting to model
module.exports = orm;