angular.module('app')
  .controller('signupController', [
      '$scope', '$state', '$localStorage', '$rootScope', 'Account',
    function ($scope, $state, $localStorage, $rootScope, Account) {
      $scope.account = {};

      $scope.signup = function () {
        Account.register($scope.user, function (result) {
          $state.go('account.signin');
        });
      };
    }]);
