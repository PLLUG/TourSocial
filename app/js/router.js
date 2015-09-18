angular.module('app')
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
    })
    .state('profile', {
      abstract: true,
      url: '/profile',
      views: {
        '@': {
          templateUrl: 'templates/shared/anonymous.html'
        },
      }
    })
    .state('profile.edit', {
      url: '/signup',
      views: {
        'content@profile': {
          templateUrl: 'templates/profile/edit.html',
          controller: 'profileEditController'
        }
      }
    })
    .state('profile.settings', {
      url: '/settings',
      views: {
        'content@profile': {
          templateUrl: 'templates/profile/settings.html',
          controller: 'profileSettingsController'
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  }]);
