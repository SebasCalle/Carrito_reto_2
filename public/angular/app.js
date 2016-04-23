var app=angular.module("MainApp",["ngRoute","Maincontrollers","MainServices"]);

app.config(Route);

function Route($routeProvider){
	$routeProvider
	.when('/',{
         templateUrl: 'views/index.html'
	})
	.when('/login',{
		
		templateUrl:'views/login.html'
	})/*.when("/registro",{

		
		templateUrl:"/views/Registro.html"
	})*/.when('/productos',{
		//controller: "ProductsController",
		templateUrl:'views/Productos.html'
	})/*.when("/carrito",{
		resolve: {
			"check": function($location,$rootScope){
				if(!$rootScope.logged){
					$location.patch("/");
				}
			}
			
		},
		templateUrl: "carrito.html"
	})*/.otherwise({
		redirectTo: '/'
	});
};


	