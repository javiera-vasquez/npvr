export class ChannelController {

  constructor($log, theMovieDB, appConfig) {
    'ngInject'

    let mv = this;
    let api = appConfig();

    mv.loading = true;
    mv.shows = mv.getShows;

    theMovieDB.setParams({
      api_key: api.key,
      with_networks: '71',
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
            let num = _.random(0, (len - 1));
            let min = _.random(0, 2);
            // add info the de show
            let show = {
              id: id,
              imdb_id: shows.results[num].id,
              time_line: setTime(time.now, time.date_stamp, time.lapsus[min]),
              name: shows.results[num].name,
              path: shows.results[num].poster_path,
              overview: shows.results[num].overview,
              menu: ['Reiniciar programa', 'Ver más episodios', 'Grabar', 'Más info']
            };
            // push the program
            showList.push(show);
            // move the counter
            id++;
            time.day -=time.lapsus[min];
            time.date_stamp += time.lapsus[min];
            //$log.debug(show);
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

function parseTime(nowDate) {
  let date = new Date(nowDate - (12*60*60*1000));
  if(date.getMinutes() > 0 && date.getMinutes() < 16) {
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
