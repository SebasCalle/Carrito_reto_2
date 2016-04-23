var express = require('express');
var router = express.Router();
var productsModel = require('../model/productModel');


router.get('/',function(req,res){
	productsModel.find(function(err,products){
		if(err){
			return res.send(500,err.message);
		}
		res.status(200).jsonp(products);
	});
});

router.post('/save',function(req,res){

	newProduct = new productsModel({
		Nombre: req.body.Nombre,
		Precio: req.body.Precio,
		Cantidad: req.body.Cantidad,
		Like: req.body.Like,
		Dislike: req.body.Dislike,
		Tipo: req.body.Tipo,
		Imagen: req.body.Imagen,
	});

	newProduct.review.push({
		Start: req.body.Start,
		Body: req.body.Body,
		Author: req.body.Author
	});

	newProduct.insert(function(err,product){
		if(err){
			return res.send(500,err.message);
		}
		res.status(200).jsonp(product);
	});
});


router.get('/type/:Tipo',function(req,res){
	productsModel.find({Tipo:req.params.Tipo},function(err,products){
		if(err){
			return res.send(500,err.message);
		}
		res.status(200).jsonp(products);
	});
});

module.exports = router;