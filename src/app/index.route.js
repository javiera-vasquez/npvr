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
      url: '/channel/:id',
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

    .state('home.search', {
      url: '/search',
      views: {
        'contentView': {
          template: '<h1>Buscar<h1>'
        }
      }
    })

  $urlRouterProvider.otherwise('/channel/64');
}
