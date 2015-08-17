angular.module('app')
  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.name = 'Login please';
    $scope.FBLogin = function () {
    FB.login(function (response) {
        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function (response) {
                var FBAccessToken = FB.getAuthResponse().accessToken;
                console.log('access token', FBAccessToken);
                console.log(response);
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    });
  }
}]);
