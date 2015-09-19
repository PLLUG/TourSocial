angular.module('app')
  .controller('tripsController', ['$scope', 'Trip', function ($scope, Trip) {
    Trip.query(function (trips) {
      $scope.trips = trips;
    });
  }]);
