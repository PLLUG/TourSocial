angular.module('app')
.directive('facebookButton', [
  'CurrentUserService',
  function (CurrentUserService) {
      return {
        restrict: 'EA',
        templateUrl: 'templates/components/facebook-button.html',
        link: function (scope) {
          scope.login = function () {
            CurrentUserService.login();
          };
        }
      };
}]);
