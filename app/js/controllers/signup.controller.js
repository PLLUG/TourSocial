angular.module('app')
  .controller('signupController', [
    '$scope', '$state', 'Account',
    function ($scope, $state, Account) {
      $scope.account = new Account();

      $scope.signup = function () {
        console.log($scope.account);
        $scope.account.$register(function (user) {
          $state.go('base.index');
        });
      };
    }]);
