export class showRecordController {
  constructor($log, $timeout, show, params) {
    'ngInject'

    let mv = this;

    mv.show = show;
    mv.apiParams = params;
    mv.user = user();
    mv.loading = true;
    mv.outOfSpace = false;
    mv.title = 'Grabar';
    mv.recodingCost = 0;
    mv.diskSpace = [];

    activate();

    function activate() {
      $timeout(() => mv.loading = false, 0);
      recordingCost('episode', mv.user.consumeSpace, mv.user.totalSpace);
    }

    function recordingCost(type, consumeSpace, totalSpace) {
      let cost = [1, 3, 5, 10];
      let types = ['episode', 'new', 'last', 'all'];
      let index = types.indexOf(type);

      mv.outOfSpace = outOfSpace();

      if (index !== -1) {
        mv.recodingCost = cost[index];
        mv.diskSpace = [{
          value: consumeSpace,
          type: 'info',
        }, {
          value: cost[index],
          type: (outOfSpace()) ? 'danger' : 'warning',
        }];
      }

      function outOfSpace() {
        if((cost[index] + consumeSpace) > totalSpace) {
          return true;
        } else {return false;}
      }

    }

    function user() {
      return {
        consumeSpace: _.random(0, 7),
        totalSpace: 10
      }
    }

    $log.debug('record controller loaded', show);

  }
}