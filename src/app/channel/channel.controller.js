export class ChannelController {

  constructor($log, $state, $scope, theMovieDB, channelService, appConfig) {
    'ngInject'

    let mv = this;
    let api = appConfig();

    mv.shows = [];
    mv.loading = true;
    mv.currentDay = new Date()
    mv.currentDay = mv.currentDay.getUTCDate();
    mv.expandShow = expandShow;

    activate();

    $log.debug('Channel Controller loadded');

    function activate() {
      return getShows().then(() => {
        $log.debug('load shows');
      });
    }

    function getShows() {
      return channelService.getShows(_.random(1000, 2000)).then((shows) => {
        angular.forEach(shows, (show) => {
            show.expand = (show.time_line.is_live) ? true : false;
        })
        mv.shows = shows;
        $log.debug('shows from channelService get', mv.shows);
      })
      .finally(() => {
        mv.loading = false;
      });
    }

    function expandShow(id) {
      angular.forEach(mv.shows, (show) => {
        show.expand = (show.id === id) ? true : false;
      });
      $scope.$watch(
        "channel.shows",
         function handleFooChange( newValue, oldValue ) {
          console.log( "mv.shows", newValue );
         }
      );
    }

  }
}

// $state.go('home.channel.detail', {network: $state.params.network, id:id});