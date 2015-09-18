angular.module('app')
  .controller('signinController', [
    '$scope', '$state', '$localStorage', '$rootScope', 'Account',
  function ($scope, $state, $localStorage, $rootScope, Account) {

    $scope.user = {};

    $scope.signin = function () {
      console.log($scope.user);
      Account.signin($scope.user, function (result) {
        $rootScope.token = result.token;
        $localStorage.token = result.token;
        $localStorage.user = result.user;
        $state.go('base.index');
      });
    }
  }]);
