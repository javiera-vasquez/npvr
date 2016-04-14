// Settings
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
// Controllers
import { MainController } from './main/main.controller';
import { ChannelController } from './channel/channel.controller';
import { ShowDetailController } from './channel/show.detail.controller';
// Services
import { appConfig } from '../app/services/appConfig.constant';
import { theMovieDB } from '../app/services/theMovieDB.service';
import { channelService } from '../app/services/channel.service';
// Directives
import { windowHeight } from '../app/components/windowHeight.directive';
import { bodyBackground } from '../app/components/bodyBackground.directive';
import { daysWeek } from '../app/channel/daysWeek.directive';
// Animations
import { slideAnimation } from '../app/channel/slider.animation';

// Import module
angular.module('npvr', ['ngAnimate', 'ngSanitize', 'ngMessages', 'ui.router', 'toastr'])
  .constant('appConfig', appConfig)
  // Config and runtime of the app
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  // Services
  .factory('theMovieDB', theMovieDB)
  .factory('channelService', channelService)
  // Directives
  .directive('windowHeight', windowHeight)
  .directive('bodyBackground', bodyBackground)
  .directive('daysWeek', daysWeek)
  // Controllers
  .controller('MainController', MainController)
  .controller('ChannelController', ChannelController)
  .controller('ShowDetailController', ShowDetailController)
  // Animations
  //.animation('.slider-animation', slideAnimation)


