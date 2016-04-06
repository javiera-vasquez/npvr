export function bodyBackground($log) {
  'ngInject'

  return function link(scope, element, attr) {

    $log.debug(scope, element, attr);

    function backgroundRandom() {
      var path = attr.path + attr.poster
      element.css('background-image', 'url(' +  path + ')');
    }

    // init's
    backgroundRandom();

  }

}
