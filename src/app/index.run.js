export function runBlock ($log, $rootScope, $window) {
  'ngInject';
  // Inject lodash
  $rootScope._ = $window._;
  // debug for ui-router
  $rootScope.$on("$stateChangeError", console.log.bind(console));
  $log.debug('runBlock end');
}
