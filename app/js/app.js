angular.module("app", ['ui.router'])
.config([
  '$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('base', {
    abstract: true,
    url: '',
    views: {
      '@': {
        templateUrl: 'templates/common/layout.html'
      },
      'header@base': {
        templateUrl: 'templates/common/header.html'
      },
      'leftbar@base': {
        templateUrl: 'templates/common/leftbar.html'
      },
      'footer@base': {
        templateUrl: 'templates/common/footer.html'
      }
    }
  })
  .state('base.index', {
    url: '',
    views: {
      'content@base': {
        templateUrl: 'templates/page.html'
      }
    }
  })
  .state('base.profile', {
    url: '/profile',
    views: {
      'content@base': {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileController'
      }
    }
  })
  .state('base.about', {
    url: '/about',
    views: {
      'content@base': {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
      }
    }
  });
}])
run(['$window', function ($window) {
  $window.fbAsyncInit = function() {
      FB.init({
        appId      : '1602241300037341',
        xfbml      : true,
        version    : 'v2.4'
      });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
}]);
