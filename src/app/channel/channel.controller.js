export class ChannelController {

  constructor($log, $state, $scope, theMovieDB, channelService, appConfig) {
    'ngInject'

    // ctrl config
    let mv = this;
    let api = appConfig();
    let storageId;

    mv.shows = [];
    mv.loading = true;
    mv.currentDay = new Date()
    mv.currentDay = mv.currentDay.getUTCDate();
    mv.expandShow = expandShow;
    mv.showsInRange = showsInRange;
    mv.openModal = openModal;

    activate();

    $log.debug('Channel Controller loadded');

    function activate() {
      return getShows().then(() => {
        $log.debug('load shows');
      });
    }

    function getShows() {
      return channelService.getShows(_.random(1000, 2000))
        .then((shows) => {
          angular.forEach(shows, (show, index) => {
            if (show.time_line.is_live) {
              show.expand = true;
              storageId = index;
            } else {
              show.expand = false;
            }
          })
          mv.shows = shows;
          $log.debug('shows from channelService get', mv.shows);
          $log.debug('number of items', mv.shows.length);
        })
        .finally(() => {
          mv.loading = false;
        });
    }

    function expandShow(id) {
      $log.debug(storageId, id);
      if (id != storageId) {
        mv.shows[id].expand = true;
        mv.shows[storageId].expand = false;
        storageId = id;
      }
    }

    function showsInRange(id) {
      if (id > (storageId + 2) || id < (storageId - 2))
        return true;
    }

    function openModal(id) {
      $log.debug('modal', modal);
      //angular.element(document.querySelector('#asdfasdf')).modal();
    }

  }
}

// $state.go('home.channel.detail', {network: $state.params.network, id:id});