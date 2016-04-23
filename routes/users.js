var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');


router.get('/',function(req,res){
	userModel.find(function(err,users){
		if(err){
			return res.send(500,err.message);
		}
		res.status(200).jsonp(users);
	});
});


router.post('/save',function(req,res){

	newUser = new userModel({
		Cedula: req.body.Cedula,
		Nombre: req.body.Nombre,
		Apellido: req.body.Apellido,
		Correo: req.body.Correo,
		Departamento: req.body.Departamento,
		Ciudad: req.body.Ciudad,
		Tipo: req.body.Tipo
	});
	newUser.save(function(err,user){
		if(err){
			return res.send(500,err.message);
		}
		res.status(200).jsonp(user);
	});
});

module.exports = router;