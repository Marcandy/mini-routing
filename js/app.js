angular.module('miniRoute', ['ui.router'])
    .config(function ($stateProvider, urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: './js/home/homeTmpl.html',
          controller: 'homeCtrl'
        })
    })
