angular.module('app')
  .controller('signupController', [
      '$scope', '$state', '$localStorage', '$rootScope', 'Account',
    function ($scope, $state, $localStorage, $rootScope, Account) {
      $scope.account = {};

      $scope.signup = function () {
        console.log($scope.account);
        Account.register($scope.user, function (result) {
          $rootScope.token = result.token;
          $localStorage.token = result.token;
          $localStorage.user = result.user;
          $state.go('base.index');
        });
      };
    }]);
