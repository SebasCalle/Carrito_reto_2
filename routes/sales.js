var express = require('express');
var router = express.Router();
var salesModel = require('../model/saleModel');


router.get('/',function(req,res){
   salesModel.find(function(err,sales){
          if(err){
          	return res.send(500,err.message);
          }
          res.status(200).jsonp(sales);
	});
});

module.exports = router;