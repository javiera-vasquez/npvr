export class ChannelController {

  constructor($log, $http, $q, $filter) {
    'ngInject'

    var mv = this;

    var defered = $q.defer();

    var path = 'https://api.themoviedb.org/3/discover/tv';
    var key = '25a2fd3a417ec4ca1d05c83fdb354704';
    var language = 'es';
    var network = '174';

    function getData() {
      $http({
        url: path,
        method: 'GET',
        params: {
          api_key: key,
          language: language,
          with_networks: network
        },
      }).success(function(res) {
        $log.debug(res);
        defered.resolve(res.results)
      }).error(function() {
        defered.reject('fail')
      });

      return defered.promise;
    }

    var series = getData();

    series
      .then(function(shows) {
        var lapsus = 30000;
        var dateStamp = Date.parse(new Date(2016, 2, 15, 0, 0, 0));

        angular.forEach(shows, function(show) {
          show.hour = dateStamp;
          dateStamp = dateStamp + lapsus;
          console.log(show);
        });

        $log.debug(shows, lapsus, dateStamp);
      })

    // $log.debug('filter:', $filter('date')('1288323623006', 'yyyy-MM-dd HH:mm:ss Z'))

  }

}
