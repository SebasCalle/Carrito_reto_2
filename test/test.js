var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

it('Should view all products on productos GET',function(done){
	chai.request(server).get('/products').end(function(err,res){
		res.should.have.status(200);
    res.body.should.be.a('array');
		done();
	});
});


it ('Should view all users on usuarios GET',function(done){
	chai.request(server).get('/users').end(function(err,res){
		res.should.have.status(200);
		done();
	});
});

it ('Should view all sales on registro GET',function(done){
	chai.request(server).get('/sales').end(function(err,res){
		res.should.have.status(200);
		done();
	});
});

it('Should view all products for type 1 GET',function(done){
 chai.request(server).get('/products/type/1').end(function(err,res){
   res.should.have.status(200);
   res.body.should.be.a('array');
   for (var i=0; i < res.body.length; i++){
    res.body[i].Tipo.should.equal(1);
  }
  done();
});
});

it('Should view all products for type 2 GET',function(done){
 chai.request(server).get('/products/type/2').end(function(err,res){
   res.should.have.status(200);
   res.body.should.be.a('array');
   for (var i=0; i < res.body.length; i++){
    res.body[i].Tipo.should.equal(2);
  }
  done();
});
});

it('Should view all products for type 3 GET',function(done){
 chai.request(server).get('/products/type/3').end(function(err,res){
   res.should.have.status(200);
   res.body.should.be.a('array');
   for (var i=0; i < res.body.length; i++){
    res.body[i].Tipo.should.equal(3);
  }
  done();
});
});

it('Should view all products for type 4 GET',function(done){
 chai.request(server).get('/products/type/4').end(function(err,res){
   res.should.have.status(200);
   res.body.should.be.a('array');
   for (var i=0; i < res.body.length; i++){
    res.body[i].Tipo.should.equal(4);
  }
  done();
});
});

it('Should save a product on productos POST',function(done){
  chai.request(server).post('/products/save').send(
  {
    "Nombre":"Zapatos",
    "Precio": 1022533,
    "Cantidad": 13,
    "Like": 0,
    "Dislike": 0,
    "Tipo": 5,
    "Imagen": "asfasfafaas",
    "review": [
    {
      "Start": 3,
      "Body": "sfasfasfa",
      "Author": "safa@hotmail.com"
    }
    ]
  }
  ).end(function(err,res){
    res.should.have.status(200);
    res.should.be.json;
    res.body.should.have.property('_id');
    res.body.should.have.property('Nombre');
    res.body.should.have.property('Precio');
    res.body.should.have.property('Cantidad');
    res.body.should.have.property('Like');
    res.body.should.have.property('Dislike');
    res.body.should.have.property('Tipo');
    res.body.should.have.property('Imagen');
    done();
  });
});

/*it('Should save a user on usuarios POST',function(done){
  chai.request(server).post('/users/save').send(
  	{"Cedula":12300,
     "Nombre": "juanito",
     "Apellido": "Suares",
     "Correo": "ejemplo@hotmail.com",
     "Departamento": "Antioquía",
     "Ciudad": "Medellín",
     "Tipo": 1
  }).end(function(err,res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.have.property('_id');
      res.body.should.have.property('Cedula');
      res.body.should.have.property('Nombre');
      res.body.should.have.property('Apellido');
      res.body.should.have.property('Correo');
      res.body.should.have.property('Departamento');
      res.body.should.have.property('Ciudad');
      res.body.should.have.property('Tipo');
      done();
  });
});
*/