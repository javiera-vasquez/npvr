/* global malarkey:false, moment:false */

// Settings
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { initialConfig } from '../app/components/initialConfig.constant';
// Controllers
import { MainController } from './main/main.controller';
import { ChannelController } from './channel/channel.controller';
// Services
// import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
// import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
// Directives
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { windowHeight } from '../app/components/windowHeight.directive';
import { bodyBackground } from '../app/components/bodyBackground.directive';

// Import module
angular.module('npvr', ['ngAnimate', 'ngSanitize', 'ngMessages', 'ui.router', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('initialConfig', initialConfig)
  // Config and runtime of the app
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  // Main => services and controllers
  .controller('MainController', MainController)
  //.service('tmdbConfig', tmdbConfig)
  //.service('tmdbNetwork', tmdbNetwork)
  // Channel => services and controllers
  .controller('ChannelController', ChannelController)
  .directive('windowHeight', windowHeight)
  .directive('bodyBackground', bodyBackground)
