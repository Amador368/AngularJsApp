(function() {

  var app = angular.module('gemStore', ['store-products']);

  /*app.controller('StoreController', function() {
    this.products = gems;
  });*/
  app.controller('StoreController', ['$http', function ($http){
    var store = this;
    store.products = [];
    
    $http.get('products.json').success(function (data){
      store.products = data;
    });
  }]);

  app.controller("ReviewController", function(){

    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };

  });
/*//services
  app.controller('someController', ['$http', function ($http){

  } ]);
  app.controller('someController', ['$http', '$log', function ($http, $log){

  } ]);
*/

})();
