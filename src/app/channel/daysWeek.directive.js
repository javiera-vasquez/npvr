export function daysWeek($log, $filter) {
  'ngInject'

  return {
    restrict: 'EA',
    scope: {
      current: '=',
      date: '='
    },
    template: '{{ text | uppercase}}',
    link: function(scope) {
      let formatDate = $filter('date')(scope.date,'d');
      if(scope.current > formatDate) {
        scope.text = 'ayer';
      } else if(scope.current == formatDate) {
          scope.text = 'hoy';
      } else {
         scope.text = 'mañana';
       }

    }
  }

}