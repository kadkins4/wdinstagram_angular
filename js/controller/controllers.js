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

  function entriesEditControllerFunction ($state, Entry) {
    this.entry = Entry.get({ id: $state.params.id })
    this.update = function () {
      this.entry.$update({ id: $state.params.id })
    }
  }

  function entriesNewControllerFunction ($state, Entry) {
    this.entry = new Entry()
    this.create = function () {
      this.entry.$save(() => {
        $state.go('entriesIndex')
      })
    }
  }
})()
