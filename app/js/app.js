angular.module("app", ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
  .state('base.about', {
    url: '/about',
    views: {
      'content@base': {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
      }
    }
  });
}]);
