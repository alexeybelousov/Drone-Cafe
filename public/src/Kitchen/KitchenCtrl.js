droneCafe.controller('CustomerCtrl', function($scope, KitchenService) {

  $scope.orderedDishes = [];
  $scope.cookingDishes = [];

  KitchenService.getOrders('ordered').then(function(res) {
    $scope.orderedDishes = res.data;
  });

  KitchenService.getOrders('cooking').then(function(res) {
    $scope.cookingDishes = res.data;
  });

});
