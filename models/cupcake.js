var orm = require("../config/orm.js");

var cupcake = {
	selectAll: function(cb) {
		orm.selectAll("cupcakes", function(res) {
			cb(res);
		});
	},
// Not sure how to add input from user as the value...
	insertOne: function(cols, vals, cb) {
		orm.insertOne("cupcakes", "cupcake_name", " ", function(res) {
			cb(res);
		});
	},
// Pretty confused on this one
	updateOne: function(cols, vals, cb) {
		orm.updateOne("cupcakes", "cupcake_name", " ", function(res) {
			cb(res);
		});
	}

};

module.exports = cupcake;