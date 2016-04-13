export function appConfig() {
  'ngInject';

  var service = {
    channel: 'discovery',
    key: '25a2fd3a417ec4ca1d05c83fdb354704',
    menus: [
      {
        channel: 'Fox+',
        route: 'channel'
      }, {
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