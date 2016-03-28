export class ChannelController {

  constructor($log, theMovieDB, appConfig) {
    'ngInject'

    let mv = this;
    let api = appConfig();

    mv.loading = true;
    mv.shows = mv.getShows;

    theMovieDB.setParams({
      api_key: api.key,
      with_networks: '64',
      language: 'es'
    });

    mv.activate(theMovieDB, $log);

  }

  activate(theMovieDB, $log) {
    return this.getShows(theMovieDB, $log);
  }

  getShows(theMovieDB, $log) {
    let mv = this;
    theMovieDB.getSeries(0)
      .then(
        (shows) => {
          var id = 1;
          let showList = [];
          let len = shows.results.length;
          let time = {
            day: 86400000, // 24h
            lapsus: [5400000, 3600000, 1800000], // 90min, 60min, 30min
            dateStamp: Date.parse(new Date()) - 43200000
          };
          while (time.day > 0) {
            let show = {};
            let num = _.random(0, (len - 1));
            let min = _.random(0, 2);
            // add info the de show
            show.id = id;
            show.now = false;
            show.hour = time.dateStamp;
            show.name = shows.results[num].name;
            show.path = shows.results[num].poster_path;
            show.overview = shows.results[num].overview
            show.menu = ['Reiniciar programa', 'Ver más episodios', 'Grabar', 'Más info'];
            // push the program
            showList.push(show);
            // move the counter
            id++;
            time.day = time.day - time.lapsus[min];
            time.dateStamp = time.dateStamp + time.lapsus[min];
            $log.debug(show);
          }
          mv.shows = showList;
          $log.debug('newArray', showList);
        }, (reason) => {
          $log.debug(reason);
        })
      .finally(() => {
        mv.loading = false;
      });
  }

}
