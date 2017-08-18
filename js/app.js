/* global angular */
'use strict';

(function () {
  angular.module('wdinstagram', [
    'ui.router',
    'ngResource'
  ])
  .config([
    '$stateProvider',
    Router
  ])

  function Router ($stateProvider) {
    $stateProvider
    .state('entriesIndex', {
      url: '/entries',
      templateUrl: 'js/view/index.html',
      controller: 'entriesIndexController',
      controllerAs: 'vm'
    })
    .state('entriesNew', {
      url: '/entries/new',
      templateUrl: 'js/view/new.html',
      controller: 'entriesNewController',
      controllerAs: 'vm'
    })
    .state('entriesShow', {
      url: '/entries/:id',
      templateUrl: 'js/view/show.html',
      controller: 'entriesShowController',
      controllerAs: 'vm'
    })
    .state('entriesEdit', {
      url: '/entries/:id/edit',
      templateUrl: 'js/view/edit.html',
      controller: 'entriesEditController',
      controllerAs: 'vm'
    })
  }
})()
