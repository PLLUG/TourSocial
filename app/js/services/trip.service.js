angular.module('app')
  .factory('Trip', [
    '$resource', 'host',
    function ($resource, host) {
      var link = host + 'trips/:id/:action';
      return $resource(link, { id: '@_id', action: '@action'});
    }]);
