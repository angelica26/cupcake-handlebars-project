var orm = require("../config/orm.js");

var cupcake = {
	selectAll: function(cb) {
		orm.selectAll("cupcakes", function(res) {
			cb(res);
		});
	},

	insertOne: function(name, cb) {
		orm.insertOne("cupcakes", ["cupcake_name", "eaten"], [name, false], cb);	
	},
// Pretty confused on this one
	updateOne: function(cols, vals, cb) {
		orm.updateOne("cupcakes", "eaten", " ", function(res) {
			cb(res);
		});
	},

	updateEaten: function(obj, cb) {
		console.log(obj)
		orm.update("cupcakes", {eaten: obj.eaten}, "id = " + obj.id, function(res) {
			cb(res);
		});
	}

};

module.exports = cupcake;