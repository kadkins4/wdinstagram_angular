/* global angular */

(function () {
  angular.module('wdinstagram')
  .controller('entriesIndexController', [
    'Entry',
    entriesIndexControllerFunction
  ])
  .controller('entriesNewController', [
    '$state',
    'Entry',
    entriesNewControllerFunction
  ])
  .controller('entriesShowController', [
    '$state',
    'Entry',
    entriesShowControllerFunction
  ])
  .controller('entriesEditController', [
    '$state',
    'Entry',
    entriesEditControllerFunction
  ])

  function entriesIndexControllerFunction (Entry) {
    this.entries = Entry.query()
  }

  function entriesShowControllerFunction ($state, Entry) {
    this.entry = Entry.get({ id: $state.params.id })
  }
})()
