droneCafe.controller('CustomerCtrl', function($scope, CustomerService) {

  $scope.orders = [];
  $scope.dishes = [];

  CustomerService.getOrders().then(function(res) {
    $scope.orders = res.data;
  });


  CustomerService.getDishes().then(function(res) {
    $scope.dishes = res.data;
  });

});
