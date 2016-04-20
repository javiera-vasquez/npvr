export class ChannelController {

  constructor($log, $state, $scope, $uibModal, channelService) {
    'ngInject'

    // ctrl config
    let mv = this;
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
        $log.debug('load shows', $scope.$parent.main.apiParams);
      });
    }

    function getShows() {
      return channelService.getShows(_.random(1000, 2000))
        .then((shows) => {
          angular.forEach(shows, (show, index) => {
            show.expand = false;
            if (show.time_line.is_live) {
              storageId = index;
              show.expand = true;
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
      // $log.debug(storageId, id);
      if (id !== storageId) {
        mv.shows[id].expand = true;
        mv.shows[storageId].expand = false;
        storageId = id;
      }
    }

    function showsInRange(id) {
      return _.inRange(id, (storageId - 2), (storageId + 3));
    }

    function openModal(type, show) {
      //$log.debug('modal', $uibModal);
      let url = (type == 'info') ? 'app/modals/show-detail/show.detail.html' : 'app/modals/show-recording/show.recording.html';
      let controller = (type == 'info') ? 'showDetailController' : 'showRecordController';

      let modalInstance = $uibModal.open({
        animation: true,
        templateUrl: url,
        controller: controller,
        controllerAs: 'modal',
        size: 'lg',
        resolve: {
          show: () => {return show;},
          params: () => {return $scope.$parent.main.apiParams;}
        }
      });

      modalInstance.result.then(() => {
        $log.info('modal open');
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });

    }

  }
}

// $state.go('home.channel.detail', {network: $state.params.network, id:id});