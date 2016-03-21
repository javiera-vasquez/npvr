export class MainController {

  constructor ($log, $window, initialConfig) {
    'ngInject'

    var mv = this;
    var channelInfo = initialConfig();

    mv.format = 'M/d/yy h:mm:ss a';
    mv.rightNow = channelInfo.now;
    mv.menuList = channelInfo.menu;

    $log.debug('Main Controller loadded');
  }

}
