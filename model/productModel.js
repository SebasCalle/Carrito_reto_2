var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
	Start: Number,
	Body: String,
	Author: String
});

var productSchema = new Schema({
	Nombre: String,
	Precio: Number,
	Cantidad: Number,
	Like: Number,
	Dislike: Number,
	Tipo: Number,
	Imagen: String,
	review: [reviewSchema]
});

var productsModel = mongoose.model('producto',productSchema);

module.exports = productsModel;