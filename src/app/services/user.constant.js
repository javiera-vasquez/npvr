export function userService() {
  'ngInject'

  var service = {
    totalSpace: 10,
    consumeSpace: _.random(0, 7),
    purchaseSpace: purchaseSpace
  }

  function purchaseSpace(value) {
    this.totalSpace = value;
  }

  return service;

}