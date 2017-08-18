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
      templateUrl: '/view/index.html',
      controller: 'entriesIndexController',
      controllerAs: 'vm'
    })
    .state('entriesNew', {
      url: '/entries/new',
      templateUrl: '/view/new.html',
      controller: 'entriesNewController',
      controllerAs: 'vm'
    })
    .state('entriesShow', {
      url: '/entries/:id',
      templateUrl: '/view/show.html',
      controller: 'entriesShowController',
      controllerAs: 'vm'
    })
    .state('entriesEdit', {
      url: '/entries/:id/edit',
      templateUrl: '/view/edit.html',
      controller: 'entriesEditController',
      controllerAs: 'vm'
    })
  }
})()
