var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:1111@ds021999.mlab.com:21999/db_carrito', function(err,res){
	if (err){
		console.log('ERROR: No se pudo conectar a la base de datos' + err);
	}
	else{
		console.log('EXITO: Conexión establecida con la base de datos');
    }
});
module.exports = mongoose;