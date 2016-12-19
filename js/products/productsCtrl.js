angular.module('miniRoute')
  .controller('productsCtrl', function ($scope, $stateParams, productService) {

    if(stateParams.id === 'shoes') {
      $scope.porductData = productService.shoeData;
    }
    else if(stateParams.id === 'socks') {
      $scope.productData = productService.sockData;
    }
  })
