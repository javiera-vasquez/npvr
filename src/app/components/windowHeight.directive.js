export function windowHeight($log, $window) {
  'ngInject'

  return function link(scope, element) {

    function setHeight() {
      var windowHeight = $window.innerHeight;
      element.css('height', windowHeight + 'px');
    }

    // init's
    setHeight();

    // height in reize
    angular.element($window).on('resize', _.debounce(setHeight, 250));

  }

}