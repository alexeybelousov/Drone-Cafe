droneCafe.controller('CustomerCtrl', function($scope, CustomerService) {

  $scope.orders = [];
  $scope.dishes = [];

  CustomerService.getOrders().then(function(res) {
    console.log(res.data);
    $scope.orders = res.data;
  });


  CustomerService.getDishes().then(function(res) {
    console.log(res.data);
    $scope.dishes = res.data;
  });

});
