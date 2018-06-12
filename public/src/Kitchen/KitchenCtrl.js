droneCafe.controller('KitchenCtrl', function($scope, KitchenService) {

  $scope.orderedDishes = [];
  $scope.cookingDishes = [];

  KitchenService.getOrders('ordered').then(function(res) {
    console.log(res.data);
    $scope.orderedDishes = res.data;
  });

  KitchenService.getOrders('cooking').then(function(res) {
    console.log(res.data);
    $scope.cookingDishes = res.data;
  });

  $scope.startCooking = function(order) {
    KitchenService.changeStatus(order, 'cooking').then(function(data) {
    });
  };

  $scope.finishCooking = function(order) {
    KitchenService.changeStatus(order, 'delivering').then(function(data) {
    });
  };

});
