angular.module('app')
  .controller('ApplicationController', ['$scope', function ($scope) {
    $scope.showMenu = true;

    $scope.toggleMenu = function () {
      $scope.showMenu = !$scope.showMenu;
    };
  }]);
