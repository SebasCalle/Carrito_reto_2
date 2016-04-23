var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var salesSchema = {
	Total: Number
}

var salesModel = mongoose.model('registro',salesSchema);

module.exports = salesModel;