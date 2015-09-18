angular.module('app')
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.contentType = 'application/json';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $httpProvider.interceptors.push([
      '$q', '$location', '$localStorage',
      function ($q, $location, $localStorage) {
        return {
          request: function (config) {
            if($localStorage.token) {
              config.headers.Authorization = $localStorage.token;
            }
            return config;
          },
          responseError: function (response) {
            if(response.status === 401 || response.status === 403) {
              $location.path('/account/signin');
            }
            $q.reject(response);
          }
        }
    }]);
  }]);
