var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usherSchema = new Schema({
	Cedula: Number,
	Nombre: String,
	Apellido: String,
	Correo: String,
	Departamento: String,
	Ciudad: String,
	Tipo: Number
});

var userModel = mongoose.model('usuario',usherSchema);

module.exports = userModel;