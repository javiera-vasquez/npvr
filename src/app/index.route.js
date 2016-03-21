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
      url: '/channel',
      views: {
        'contentView': {
          templateUrl: 'app/channel/channel.html'
        }
      }
    })

  $urlRouterProvider.otherwise('/channel');
}
