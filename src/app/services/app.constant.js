export function appService() {
  'ngInject';

  var service = {
    tmdb_api_key: '25a2fd3a417ec4ca1d05c83fdb354704',
    channels: ['Fox+', 'Discovery Channel', 'AMC', 'HBO'],
    menus: [{
        channel: 'Mis grabaciones',
        route: 'record'
      }, {
        channel: 'Vod',
        route: 'vod'
      }, {
        channel: 'Para ti',
        route: 'custom'
      }
    ]
  }

  return service;
}