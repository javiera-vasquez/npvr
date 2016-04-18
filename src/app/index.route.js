export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider

    .state('home', {
      url: '',
      abstract: true,
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })

    .state('home.channel', {
      url: '/channel/:network',
      views: {
        'contentView': {
          templateUrl: 'app/channel/channel.html',
          controller: 'ChannelController',
          controllerAs: 'channel'
        }
      }
    })

    .state('home.record', {
      url: '/record',
      views: {
        'contentView': {
          template: '<h1>RECORD<h1>'
        }
      }
    })

    .state('home.vod', {
      url: '/vod',
      views: {
        'contentView': {
          template: '<h1>VOD<h1>'
        }
      }
    })

    .state('home.custom', {
      url: '/custom',
      views: {
        'contentView': {
          template: '<h1>PARA TI<h1>'
        }
      }
    })

    .state('player', {
      url: '/player',
      template: '<h1>video en auto play</h1>',
      controller: function() { console.log('mira este video!') }
    })

    .state('vod', {
      url: '/old-vod/:type',
      template: '<h1>estamos en vod</h1>',
      controller: function() { console.log('mira que feo') }
    })

  $urlRouterProvider.otherwise('/channel/64');
}
