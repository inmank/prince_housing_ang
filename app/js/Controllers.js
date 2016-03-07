var housingAppCtrl = angular.module('housingAppCtrl', []);

housingAppCtrl.controller('EligiblityCtrl', ['$scope', '$http', '$location', 
    function ($scope, $http, $location) {
        $http.get("../resources/regions.json")
            .then(function(response) {
               $scope.allowedRegions = response.data;
        });
    }]);

housingAppCtrl.controller('HomeCtrl', ['$scope', '$http', '$location', 
  function ($scope, $http, $location) {
      $scope.openForm = function() {
          $location.url("/CheckEligiblity");
      }
  }]);