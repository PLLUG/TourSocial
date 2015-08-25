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
        templateUrl: 'templates/shared/layout.html'
      },
      'sidebar@base': {
        templateUrl: 'templates/shared/sidebar.html'
      },
      'footer@base': {
        templateUrl: 'templates/shared/footer.html'
      }
    }
  })
  .state('base.index', {
    url: '/',
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
        controller: 'aboutController'
      }
    }
  })
  .state('account', {
    abstract: true,
    url: '/account',
    views: {
      '@': {
        templateUrl: 'templates/shared/anonymous.html'
      },
    }
  })
  .state('account.signin', {
    url: '/signin',
    views: {
      'content@account': {
        templateUrl: 'templates/signin.html',
        controller: 'signinController'
      }
    }
  })
  .state('account.signup', {
    url: '/signup',
    views: {
      'content@account': {
        templateUrl: 'templates/signup.html',
        controller: 'signupController'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
}])
.constant('FACEBOOK', {
  appId: '1475404016115759',
  appSecret: '8391e855ba631a27534c3e118c80b04f'
})
.run(['$rootScope', '$state', function ($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (e, toState, fromState) {});
}]);
