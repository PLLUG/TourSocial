angular.module('app')
  .factory('Account', [
    '$resource', 'host',
    function ($resource, host) {
      var link = host + 'account/:action';
      return $resource(link, { action: '@action'}, {
        register: {method: 'POST', params: { action: 'register' } },
        signin: { method: 'POST', params: { action: 'email-login' } },
        current: { method: 'GET', isArray: false, params: { action: 'me' } }
      });
    }]);
