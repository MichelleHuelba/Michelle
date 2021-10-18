app.controller('myController', ['$scope', function($scope){
        $scope.carts=[];
        $scope.products = [
          {p_id: "1", p_name: "Beats Solo 3 Wireless on-ear headphones", p_des:"EUE DE Toilette for men 100ml", p_image: "image/img1.jpg", p_price: 4710},
          {p_id: "2", p_name: "ZAPET Wireless Headphones Bluetooth", p_des:"For men perfume 125ml", p_image: "image/img2.jpg", p_price: 502},
          {p_id: "3", p_name: "Bose QuietComfort 35 II Noise reducer", p_des:"EUE DE Toilette for men 100ml", p_image: "image/img3.jpg", p_price: 7259},
          {p_id: "4", p_name: "Urbanears Pampas Wireless Headphones", p_des:"EUE DE Toilette for men 100ml", p_image: "image/img4.jpg", p_price: 3390},
          {p_id: "5", p_name: "rose gold gaming headphones", p_des:"Eau de Toilette for men 125ml",  p_image: "image/img5.jpg", p_price: 9581},
          {p_id: "6", p_name: "wireless earphones p47", p_des:"Honey EAU DE Cologne 100ml", p_image: "image/img6.jpg", p_price: 499}, 
        ];
        
        $scope.add_cart = function(product){
          if(product){
            $scope.carts.push({p_id: product.p_id, p_name: product.p_name,p_image: product.p_image, p_price: product.p_price});
          } 
        }
            
          
        $scope.total = 0;
        
        $scope.setTotals = function(cart){
          if(cart){
            $scope.total += cart.p_price;
          }
        }
        
        $scope.remove_cart = function(cart){
          if(cart){
            $scope.carts.splice($scope.carts.indexOf(cart), 1);
            $scope.total -= cart.p_price;
          }
        }

  }]);