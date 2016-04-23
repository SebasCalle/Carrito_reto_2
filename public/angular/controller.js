var controllers=angular.module("Maincontrollers",["MainServices"]);

  
controllers
.controller("ProductsController",["ShopSesion",operaciones])
.controller("carritoCtrl",process)
.controller("loginCtrl",configlogin)
.controller("RegisterCtrl",configregister);



 
function operaciones ($scope,$http,ShopSesion) {
$scope.productos= [];

     $scope.tenis = [{
    
}];
     $scope.camisas = [{
    
}];

     $scope.busos = [];


    $http.get('/productos').success(function(data) {
        $scope.productos = data;
      }).error(function(data) {
        console.log('Error: ' + data);
      });
           

      this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };

       

      $scope.ordenarPor=function(orden){
        $scope.ordenSeleccionado=orden;
      }


$scope.add = function(producto) {
    ShopSesion.add(producto);
}



  $scope.review={};
  $scope.formVisibility=false;

  $scope.addReview = function(producto){

    producto.reviews.push($scope.review);

    $scopereview= {};
    $scope.formVisibility=false;
  }



  $scope.Showform=function(){
    $scope.formVisibility=true;
  }

 

$scope.incrementLikes =function (producto){
  producto.like++;
}
 $scope.incrementDislikes=function(producto){
  producto.Dislikes++;

}

}

function process(ShopSesion){
  $scope.newproducts = ShopSesion.getProducts;
  $scope.borrar= function(producto){
    var i;
      var len= $scope.newproducts.length;
       for(i=0; i < len;i++){
            if($scope.newproducts[i].Nombre===producto.Nombre){
                $scope.newproducts.splice(i,1);
              return  ;
            }
        }

  }
}

function configlogin($scope,$location,$rootScope){
  $scope.submit= function(){
    
      if($scope.username == $scope.usuario.user && $scope.password == $scope.usuario.pass){
        $rootScope.logged =true;
         $location.path("/carrito");
      }else {
        alert("INFO INCORRECTA ");
      }
    }
 }


  function configregister()
{

}