droneCafe.controller('CustomerCtrl', function($scope, CustomerService) {

  $scope.orderedDishes = [];
  $scope.cookingDishes = [];

  CookDashboardService.getDishes('ordered').then(function(res) {
    $scope.orderedDishes = res.data;
  });

  CookDashboardService.getDishes('cooking').then(function(res) {
    $scope.cookingDishes = res.data;
  });

});
