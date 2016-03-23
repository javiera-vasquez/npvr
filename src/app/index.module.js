// Settings
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
// Controllers
import { MainController } from './main/main.controller';
import { ChannelController } from './channel/channel.controller';
// Services
import { initialConfig } from '../app/services/initialConfig.constant';
import { theMovieDB } from '../app/services/theMovieDB.service';
// Directives
import { windowHeight } from '../app/components/windowHeight.directive';
import { bodyBackground } from '../app/components/bodyBackground.directive';

// Import module
angular.module('npvr', ['ngAnimate', 'ngSanitize', 'ngMessages', 'ui.router', 'toastr'])
  .constant('initialConfig', initialConfig)
  // Config and runtime of the app
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  // Services
  .factory('theMovieDB', theMovieDB)
  // Directives
  .directive('windowHeight', windowHeight)
  .directive('bodyBackground', bodyBackground)
  // Controllers
  .controller('MainController', MainController)
  .controller('ChannelController', ChannelController)


