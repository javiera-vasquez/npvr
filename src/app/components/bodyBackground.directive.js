export function bodyBackground($log) {
  'ngInject'

  return function link(scope, element) {

    function backgroundRandom() {
      var path = '.././assets/images/backgrounds/background_'
      var number = _.random(1, 10);
      element.css('background-image', 'url(' + path + number + '.jpg)');
    }

    // init's
    backgroundRandom();

  }

}