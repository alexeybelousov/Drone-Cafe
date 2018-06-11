angular
.module('droneCafe')
.factory('CustomerService', function($http) {

  return {

    getOrders: function() {
      return $http.get('/orders');
    },

    getDishes: function() {
        return $http.get('/dishes');
    },
  }
});
