var services= angular.module("MainServices",[]);



services
.factory("ShopSesion",["$scope",shop]);

function shop ($scope){

	var newproductos=[];

     isEmpty=function(product,newproductos){
		 var i;
		 var len= newproductos.length;
			for(i=0; i < len;i++){
					 if(newproductos[i].Nombre===producto.Nombre){
						 return true ;
					 }
			 }
			 return false;
			};


        add:function(product){
         if(!this.isEmpty(producto, ShopSesion.newproductos)){
	     // $scope.newproducto.cantidad = 1;
	      newproductos.push(producto);
         }
            

     } 
     }
   

    



};
