export class MainController {

  constructor($log, $q, $state, $rootScope, appService, tmdbService, channelService) {
    'ngInject'

    let showId;
    let mv = this;
    let app = appService();

    mv.show = {};
    mv.apiParams = {};
    mv.channel = app.channels;
    mv.menus = app.menus;

    tmdbService.setParams({
      api_key: app.tmdb_api_key,
      language: 'es',
      with_networks: $state.params.network
    });

    // $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
    //   $log.debug('asdfafs')
    // });

    activate();

    $log.debug('Main Controller loadded');

    function activate() {
      return getShows().then(() => {
        $log.debug('LOAD => list of shows in base channel:id');
      }).then(() => {
        return getConfig().then(() => {
          $log.debug('LOAD => the movie DB init config');
          $log.debug(mv.apiParams);
        })
      }).then(() => {
        return getShow().then(() => {
          $log.debug('LOAD => get the active live program info');
        })
      })
    }

    function getConfig() {
      return tmdbService.getConfig(0).then((config) => {
        mv.apiParams = config;
      });
    }

    function getShows() {
      let defered = $q.defer();
      return tmdbService.getSeries(0)
        .then((shows) => {
          // Init values for the loop
          let id = 1;
          let showList = [];
          let len = shows.results.length;

          // Time obj
          let time = {
            now: new Date(),
            date_stamp: parseTime(new Date()),
            day: 86400000, // 24h
            lapsus: [5400000, 3600000, 1800000] // 90min, 60min, 30min
          };
          // Loop adding random shows for 24 hours of time obj
          while (time.day > 0) {
            let index = _.random(0, (len - 1));
            let minutes = _.random(0, 2);
            // add info the de show
            let show = {
              id: id,
              imdb_id: shows.results[index].id,
              catchup: (minutes > 0) ? true : false,
              episode: _.random(1, 13),
              season: _.random(1,3),
              time_line: setTime(time.now, time.date_stamp, time.lapsus[minutes]),
              name: shows.results[index].name,
              path: shows.results[index].poster_path,
              overview: shows.results[index].overview
            };
            if (show.time_line.is_live === true) {
              showId = show.imdb_id;
            };
            // push the program
            showList.push(show);
            // move the counter
            id++;
            time.day -= time.lapsus[minutes];
            time.date_stamp += time.lapsus[minutes];
            //$log.debug(show);
          }

          return showList;

        }, (reason) => {
          $log.debug(reason);
        }).then((res) => {
          defered.resolve(res);
          return channelService.setShows(defered.promise);
        });
    }

    function getShow() {
      return tmdbService.getShow(showId, 0).then((show) => {
        mv.show = show;
      });
    }

    function parseTime(nowDate) {
      let date = new Date(nowDate - (12 * 60 * 60 * 1000));
      if (date.getMinutes() > 0 && date.getMinutes() < 16) {
        date.setMinutes(0);
      } else if (date.getMinutes() > 15 && date.getMinutes() < 46) {
        date.setMinutes(30);
      } else {
        date.setMinutes(0);
        date.setHours(date.getHours() + 1);
      }
      return Date.parse(date);
    }

    function setTime(nowDate, dateStamp, lapsus) {
      let date = Date.parse(nowDate);
      let obj = {
        hour_start: dateStamp,
        hour_end: dateStamp + lapsus
      };
      obj.is_live = (obj.hour_start < date && obj.hour_end > date) ? true : false;
      return obj;
    }

  }

}
