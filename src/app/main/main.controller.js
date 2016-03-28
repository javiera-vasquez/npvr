export class MainController {

  constructor ($log, $window,theMovieDB, appConfig) {
    'ngInject'

    var mv = this;

    mv.config = {};
    mv.appConfig = appConfig();

    theMovieDB.setParams({
      api_key: mv.appConfig.key
    });

    var config = theMovieDB.getConfig(0);

    config.then(
      function(config) {
        mv.config = config;
      }, function(reason) {
        $log.debug(reason);
      })

    $log.debug('Main Controller loadded', mv.appConfig);
  }

}
