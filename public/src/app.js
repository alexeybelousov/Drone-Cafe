var droneCafe = angular.module('droneCafe', ['ngRoute', 'ngResource']);

angular.module('droneCafe')

.config(['$routeProvider',
  function config($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'src/Customer/Customer.html',
        controller: 'CustomerCtrl'
      })
      // .when('/kitchen', {
      //   templateUrl: 'src/Kitchen/Kitchen.html',
      //   controller: 'KitchenCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
