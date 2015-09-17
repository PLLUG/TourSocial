angular.module('app')
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.contentType = 'application/json';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);
