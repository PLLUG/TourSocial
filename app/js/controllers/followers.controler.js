angular.module('app')
.controller('followersCtrl', ['$scope', function ($scope) {
    $scope.photos = [
      {'img': 'images/1.jpg',
       'name': 'Halyna Yaroshenko',
       'date': 'Today'},
       {'img': 'images/1.jpg',
        'name': 'qwqert',
        'date': 'Today'}
    ];
}]);
