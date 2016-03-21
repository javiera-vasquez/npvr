export function windowHeight($log, $window) {
  'ngInject'

  return function link(scope, element) {

    function resize() {
      var windowHeight = $window.outerHeight;
      element.css('height', windowHeight + 'px');
    }

    // init height
    resize();

    // height in reize
    angular.element($window).on('resize', function() {
      resize();
    });

  }

}