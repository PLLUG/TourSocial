angular.module('app')
  .controller('profileSettingsController', [
    '$scope', 'currentUserService',
    function ($scope, currentUserService) {
    $scope.user = currentUserService.user();

    $scope.pass = {};

    $scope.update = function () {
      currentUserService.update($scope.user, function () {

      });
    };

    $scope.savePassword = function () {
      currentUserService.updatePassword(pass, function () {

      });
    };
  }]);
