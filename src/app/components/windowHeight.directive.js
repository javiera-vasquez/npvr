export function windowHeight($window) {
  'ngInject'

  return function link(scope, element) {

    var window = angular.element($window);

    function setHeight() {
      var windowHeight = $window.innerHeight;
      element.css('height', windowHeight + 'px');
    }

    // init's
    setHeight();

    // height in resize
    window.on('resize', _.debounce(setHeight, 250));
    window.on('$destroy', setHeight());

  }

}