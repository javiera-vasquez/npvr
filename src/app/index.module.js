// Settings
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
// Controllers
import { MainController } from './main/main.controller';
import { ChannelController } from './channel/channel.controller';
import { showController } from './modals/show.controller';
// Services
import { appService } from '../app/services/app.constant';
import { userService } from '../app/services/user.constant';
import { tmdbService } from '../app/services/tmdb.service';
import { channelService } from '../app/services/channel.service';
import { recordingListService } from '../app/services/recordingList.service';
// Directives
import { windowHeight } from '../app/components/windowHeight.directive';
import { bodyBackground } from '../app/components/bodyBackground.directive';
import { daysWeek } from '../app/channel/daysWeek.directive';
// Animations
import { slideAnimation } from '../app/channel/slider.animation';

// Import module
angular.module('npvr', [
  'ngAnimate',
  'ngSanitize',
  'ngMessages',
  'ui.router',
  'toastr',
  'ui.bootstrap'
  ])
  .constant('appService', appService)
  .constant('userService', userService)
  // Config and runtime of the app
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  // Services
  .factory('tmdbService', tmdbService)
  .factory('channelService', channelService)
  .factory('recordingListService', recordingListService)
  // Directives
  .directive('windowHeight', windowHeight)
  .directive('bodyBackground', bodyBackground)
  .directive('daysWeek', daysWeek)
  // Controllers
  .controller('MainController', MainController)
  .controller('ChannelController', ChannelController)
  .controller('showController', showController)
  // Animations
  //.animation('.slider-animation', slideAnimation)


