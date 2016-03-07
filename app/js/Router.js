var housingApp = angular.module('housingApp', ['ngRoute', 'housingAppCtrl']);
  
housingApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/CheckEligiblity', {
        templateUrl: 'views/CheckEligiblity.html',
        controller: 'EligiblityCtrl'
      }).
      when('/home', {
        templateUrl: 'views/Home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);