angular.module('app')
  .directive('userAvatar', ['$timeout', function($timeout) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/components/user-avatar.html',
      link: function (scope, element) {

        var toggleDropdown = function () {
          scope.isOpen = !scope.isOpen;

          $timeout(function () {
            scope.$apply();
          }, 100);
        };

        element.on('click', function () {
          toggleDropdown();
        });
      }
    };
  }]);
