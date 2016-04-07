export function bodyBackground($log, $timeout) {
  'ngInject'

  return function(scope, element, attrs) {
    scope.$watch(attrs.path, function(value) {
      element.addClass('animated fadeIn');
      element.css({
        'background-image': 'url(' + value + ')'
      });
    });
  }; 

};

  // return {
  //   link: function(scope, element, attr) {
  //     $log.debug('attr', attr);

  //     $timeout(() => {
  //       let url = attr.path + attr.poster;
  //       element.css({
  //         'background-image': 'url(' + url + ')',
  //         'background-size': 'cover'
  //       });

  //     }, 1000)
  //   }
  // }


