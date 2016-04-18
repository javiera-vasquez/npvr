export class showController {
  constructor($log, show, params, tmdbService, appService) {
    'ngInject'

    let mv = this;
    let app = appService();

    mv.show = {};
    mv.apiParams = params;
    mv.loading = true;

    tmdbService.setParams({
      api_key: app.tmdb_api_key,
      language: 'es'
    });

    //mv.channel

    activate();

    function activate() {
      return getShow(show.imdb_id, 0).then(() => {
        $log.debug('show detail loaded');
      });
    }

    function getShow(id, delay) {
      return tmdbService.getShow(id, delay)
        .then((respond) => {
          mv.show = respond;
        }, (reason) => {
          $log.debug(reason);
        }).finally(() => {
          mv.loading = false;
      });
    }

    $log.debug(show.imdb_id, tmdbService);

  }
}