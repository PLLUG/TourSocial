angular.module('app')
.factory('CurrentUserService', [
  '$q', '$http', 'FACEBOOK',
  function($q, $http, FACEBOOK) {
  var login = function () {
    var facebookDefer = $q.defer();

    $http.get('http://graph.facebook.com/oauth/access_token', {
      params: {
        client_id: FACEBOOK.appId,
        client_secret: FACEBOOK.appSecret,
        grant_type: [],
        redirect_uri: 'https://www.facebook.com/connect/login_success.html'
      }
      })
      .success(function (user) {
        facebookDefer.resolve(user);
      })
      .error(function (error) {
        facebookDefer.reject(error);
      });

      return facebookDefer.promise;
  }

  return {
    login: login
  };
}]);
