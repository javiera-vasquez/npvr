export class showRecordController {
  constructor($log, $timeout, show, params, userService) {
    'ngInject'

    let mv = this;
    let delay = 0;
    let recordStages = ['confirm-recording', 'success-recording'];
    let purchaseStages = ['purchase-space', 'validate-password', 'success-purchase'];

    // services
    mv.show = show;
    mv.apiParams = params;
    mv.user = userService();
    // view params
    mv.title = 'Grabar';
    mv.loading = true;
    mv.stage = undefined;
    mv.outOfSpace = false;
    mv.setRecord = setRecord;
    // user space calc
    mv.recodingCost = 0;
    mv.diskSpace = [];

    activate();

    function activate() {
      $timeout(() => mv.loading = false, delay).then(() => {
        $log.debug('calc space and stage');
      });
    }


    // 1.- Define two paths => record a program || purchase space
    // 2.- Set path to null push default view
    // 3.- If not possible record then path =
    //













    function setRecord(type, user) {
      let cost = [1, 3, 5, 10];
      let types = ['episode', 'new', 'last', 'all'];
      let index = types.indexOf(type);
      if(!outOfSpace(user, cost[index]) && index !== -1) {
        setStage(mv.stage, recordStages[0]);
      } else {
        mv.title = 'asdf';
        setStage(mv.stage, purchaseStages[0]);
      }
    }

    function confirmRecord() {

    }

    function setStage(oldStage, newStage) {
      $log.debug('old', oldStage, 'new',newStage);
      if(oldStage !== newStage)
        return mv.stage = newStage;
    }

    function outOfSpace(user, cost) {
      return ((cost + user.consume) > user.total) ? true : false;
    }




    function recordingCost(type, validation, user) {
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
    }

    $log.debug('record controller loaded', mv.user);

  }
}