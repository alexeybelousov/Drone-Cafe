angular
.module('droneCafe')
.factory('CustomerdService', function($http) {

  return {

    getOrders: function() {
      return $http.get('/orders');
    },

    getDishes: function() {
        return $http.get('/dishes');
    },
  }
});
