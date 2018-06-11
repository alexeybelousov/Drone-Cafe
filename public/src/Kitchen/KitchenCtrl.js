droneCafe.controller('CustomerCtrl', function($scope, KitchenService) {

  $scope.orderedDishes = [];
  $scope.cookingDishes = [];

  KitchenService.getDishes('ordered').then(function(res) {
    $scope.orderedDishes = res.data;
  });

  KitchenService.getDishes('cooking').then(function(res) {
    $scope.cookingDishes = res.data;
  });

});
