export class showRecordController {
  constructor($log, $timeout, show, params, userService) {
    'ngInject'

    let mv = this;
    let delay = 0;
    let recordingCost = [1, 3, 5, 10];
    let types = ['episode', 'new', 'last', 'all'];
    let recordStages = ['confirm-recording', 'success-recording'];
    let purchaseStages = ['purchase-space', 'validate-password', 'success-purchase'];

    // services
    mv.show = show;
    mv.apiParams = params;
    mv.user = userService;
    // view params
    mv.title = 'Grabar';
    mv.loading = true;
    mv.outOfSpace = false;
    mv.stage = undefined;
    mv.setRecord = setRecord;
    mv.buySpace = buySpace;
    // user space calc
    mv.recodingCost = 0;

    activate();

    function activate() {
      $timeout(() => mv.loading = false, delay).then(() => {
        $log.debug('calc space and stage');
      });
    }

    function setTitle(type) {
      var title = {

      }
      return (title.hasOwnProperty(type)) ?  title[type] : 'Grabar';
    }

    // stages controls
    function setRecord(type) {
      let index = types.indexOf(type);
      if(!outOfSpace(mv.user, recordingCost[index]) && index !== -1) {
        setStage(mv.stage, recordStages[0]);
      } else {
        mv.outOfSpace = true;
      }
    }

    function buySpace() {
      setStage(mv.stage, purchaseStages[0]);
    }

    // helpers functions
    function setStage(oldStage, newStage) {
      $log.debug('old', oldStage, 'new',newStage);
      if(oldStage !== newStage)
        return mv.stage = newStage;
    }

    function outOfSpace(user, cost) {
      $log.debug(cost, user.consumeSpace, user.totalSpace);
      return ((cost + user.consumeSpace) > user.totalSpace) ? true : false;
    }

    $log.debug('record controller loaded', mv.user);

  }
}