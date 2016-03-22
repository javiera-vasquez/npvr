export class MainController {

  constructor ($log, $window, initialConfig) {
    'ngInject'

    var mv = this;
    mv.channelInfo = initialConfig();

    $log.debug('Main Controller loadded');
  }

}
