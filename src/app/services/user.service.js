export function userService($log, $q) {
  'ngInject'

  var service = {
    totalSpace: 10,
    consumeSpace: _.random(0, 7),
    purchaseSpace: purchaseSpace
  }

  return service;

  function purchaseSpace(value) {
    this.totalSpace += value;
  }

}