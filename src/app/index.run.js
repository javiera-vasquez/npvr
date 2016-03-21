export function runBlock ($log, $rootScope) {
  'ngInject';
  $rootScope._ = window._;
  $log.debug('runBlock end', $rootScope._);
}
