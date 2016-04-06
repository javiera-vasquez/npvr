export class ChannelController {

  constructor($log, $stateParams, theMovieDB, channelService, appConfig) {
    'ngInject'

    let mv = this;
    let api = appConfig();

    mv.shows = [];
    mv.loading = true;
    mv.currentDay = new Date()
    mv.currentDay = mv.currentDay.getUTCDate();

    activate();

    $log.debug('Channel Controller loadded');

    function activate() {
      return getShows().then(() => {
        $log.debug('load shows');
      });
    }

    function getShows() {
      return channelService.getShows(_.random(1000, 2000)).then((shows) => {
        $log.debug('shows from channelService get', shows);
        mv.shows = shows;
      })
      .finally(() => {
        mv.loading = false;
      });
    }

  }
}
