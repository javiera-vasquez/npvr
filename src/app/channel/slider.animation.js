export function slideAnimation($log) {
  'ngInject'

  return {
    enter: function(element, done) {
      $log.debug('enter')
      let animationName = 'slideInLeft'
      let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      element.addClass('animated ' + animationName).one(animationEnd, () => {
        element.removeClass('animated ' + animationName);
        done();
      });
    },
    move: function(element, done) {
      $log.debug('move')
      let animationName = 'bounceIn'
      let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      element.addClass('animated ' + animationName).one(animationEnd, () => {
        element.removeClass('animated ' + animationName);
        done();
      });
    },
    leave: function(element, done) {
      $log.debug('leave')
      let animationName = 'slideOutRight'
      let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      element.addClass('animated ' + animationName).one(animationEnd, () => {
        element.removeClass('animated ' + animationName);
        done();
      });
    }
  }

}