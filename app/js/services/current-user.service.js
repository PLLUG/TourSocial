angular.module('app')
.factory('CurrentUserService', [
  '$q', '$http', '$localStorage',
  function($q, $http, $localStorage) {
  var login = function () {
    var facebookDefer = $q.defer();

    $http.get('some_facebook_url', {})
      .success(function (user) {
        facebookDefer.resolve(user);
      })
      error(function (error) {
        facebookDefer.reject(error);
      });

      facebookDefer.promise.then(function (token) {
        $localStorage.token = token;
        $http.post('/currentUser', {
          token: token
        })
        .success(function (user) {
          $localStorage.user = user;
        });
      });

      return facebookDefer.promise;
  }

  return {
    login: login
  };
}]);
