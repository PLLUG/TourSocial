angular.module('app')
.factory('currentUserService', [
  '$state', '$rootScope', '$localStorage', 'Account',
  function($state, $rootScope, $localStorage, User) {
    return {
      user: function () {
        console.log($localStorage.user);
        return $localStorage.user;
      },

      signout: function () {
        delete $localStorage.user;
        delete $localStorage.token;
        delete $rootScope.token;
        $state.go('account.signin');
      }
    };
  }]);
