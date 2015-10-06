angular.module('pnrApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeCtrl', function($scope){
  $scope.logo = '<img class="title-image" src="img/pnrlogo.png">';
  $scope.categories = [
    { img: 'ionic.png'},
    { img: 'ionic.png'},
    { img: 'ionic.png' }
  ];
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('RibbonsCtrl', function($scope, RibbonService){
  $scope.logo = '<img class="title-image" src="img/pnrlogo.png">';
  $scope.title = 'Ribbons';
  $scope.icon = 'ion-bowtie';

  // $scope.nextSlide = function(){
  //   $ionicSlideBoxDelegate.next();
  // }
  $scope.products = RibbonService.products;
})

.controller('PillowsCtrl', function($scope, PillowService){
  $scope.logo = '<img class="title-image" src="img/pnrlogo.png">';
  $scope.title = 'Pillows';
  $scope.icon = 'ion-ios-photos';

  // $scope.nextSlide = function(){
  //   $ionicSlideBoxDelegate.next();
  // }
  $scope.products = PillowService.products;
})

.controller('ContactCtrl', function($scope){
  $scope.logo = '<img class="title-image" src="img/pnrlogo.png">';
})
