angular.module('app')
  .directive('userAvatar', [
    '$timeout', 'currentUserService',
    function($timeout, currentUserService) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/components/user-avatar.html',
      link: function (scope, element) {

        scope.user = currentUserService.user();

        var toggleDropdown = function () {
          scope.isOpen = !scope.isOpen;

          $timeout(function () {
            scope.$apply();
          }, 100);
        };

        element.on('click', function () {
          toggleDropdown();
        });

        scope.signout = function () {
          currentUserService.signout();
        }
      }
    };
  }]);
