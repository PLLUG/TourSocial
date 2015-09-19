angular.module('app')
.factory('currentUserService', [
  '$state', '$rootScope', '$localStorage', 'Account',
  function($state, $rootScope, $localStorage, Account) {
    return {
      user: function () {
        return $localStorage.user;
      },

      signout: function () {
        delete $localStorage.user;
        delete $localStorage.token;
        delete $rootScope.token;
        $state.go('account.signin');
      },

      update: function (user, cb) {
        Account.update(user, function (user) {
          $localStorage.user = user;
          cb(user);
        });
      },

      updatePassword: function (pass, cb) {
        Account.updatePassword(pass, function (status) {
          console.log(status);
        });
      }
    };
  }]);
