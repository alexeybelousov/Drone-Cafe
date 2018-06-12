droneCafe.controller('CustomerCtrl', function($scope, CustomerService) {

  $scope.logged = false;
  $scope.customer = {};

  $scope.customer = JSON.parse(localStorage.getItem('customer'));
  if ($scope.customer == null) {
    $scope.customer = {};
  }

  $scope.login = function (customer) {
    CustomerService.login(customer).then(function (res) {
      $scope.logged = true;
      $scope.customer = res.data;
      localStorage.setItem('customer', JSON.stringify($scope.customer));

      $scope.orders = [];
      $scope.dishes = [];

      CustomerService.getOrders($scope.customer._id).then(function(res) {
        $scope.orders = res.data;
      });

      CustomerService.getDishes().then(function(res) {
        $scope.dishes = res.data;
      });

    });
  }

  $scope.addCredits = function() {
    $scope.customer.credits += 100;

    CustomerService.addCredits($scope.customer).then(function(data) {
    });
  };

  $scope.makeOrder = function(dish) {
    $scope.customer.credits -= dish.price;

    CustomerService.addCredits($scope.customer).then(function(data) {
    });

    CustomerService.newOrder($scope.customer._id, dish._id).then(function(data) {
    });
  };

  // socket new order
  // socket change status

});
