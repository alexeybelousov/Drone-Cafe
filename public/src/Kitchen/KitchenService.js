angular
.module('droneCafe')
.factory('KitchenService', function($http) {

  return {

    getDishes: function(status) {
      return $http.get('/orders', { status: status });
    }
  }
});
