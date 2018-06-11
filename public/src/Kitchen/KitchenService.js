angular
.module('droneCafe')
.factory('KitchenService', function($http) {

  return {

    getOrders: function(status) {
      return $http.get('/orders?status=' + status);
    }
  }
});
