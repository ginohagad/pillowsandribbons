angular.module('pnrApp', ['ionic', 'pnrApp.controllers', 'pnrApp.filter', 'factories'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
    // if(window.Connection){
    //   if(navigator.connection.type == Connection.NONE) {
    //     alert("There is no Internet connection.");
    //   }
    // }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.navBar.alignTitle('left')

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.ribbons', {
    url: '/ribbons',
    views: {
      'menuContent': {
        templateUrl: 'templates/products.html',
        controller: 'RibbonsCtrl'
      }
    }
  })

  .state('app.pillows', {
    url: '/pillows',
    views: {
      'menuContent': {
        templateUrl: 'templates/products.html',
        controller: 'PillowsCtrl'
      }
    }
  })

  .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html',
        controller: 'ContactCtrl'
      }
    }
  });
  
  $urlRouterProvider.otherwise('/app/');
});
