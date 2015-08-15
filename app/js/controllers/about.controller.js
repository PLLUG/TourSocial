angular.module('app')
  .controller('AboutController', ['$scope', function ($scope) {
    $scope.markers = [{
      lat: 51.3,
      lng: 0.7,
      content: "some content"
    }];
  }]);
