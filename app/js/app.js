angular.module("app", [
  'ngResource',
  'ngStorage',
  'ui.router'
])
.run([
  '$rootScope', '$localStorage', '$state',
  function ($rootScope, $localStorage, $state) {
    $rootScope.$on('$stateChangeStart', function (e, toState) {
      if(!$localStorage.token && toState.name !== 'account.signin') {
        $state.go('account.signin');
      }
    });
  }]);
