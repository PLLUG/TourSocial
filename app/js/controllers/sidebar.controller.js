angular.module('app')
  .controller('sidebarController', [
    '$scope', 'currentUserService',
    function ($scope, currentUserService) {
    $scope.user = currentUserService.user();

    console.log($scope.user);
  }]);
