export function channelService($log, $q, $timeout) {
  'ngInject'

  let shows = [];

  const service = {
    setShows: setShows,
    getShows: getShows
  }

  return service;

  function getShows(delay) {
    //$log.debug('get a', shows);
    let defered = $q.defer();
    $timeout(() => {
      //$log.debug('get b', shows);
      defered.resolve(shows);
    }, delay);
    return defered.promise;
  }

  function setShows(series) {
    return series.then((list) => {
      $log.debug('set asdklfjaklsdjflaksdjf akldsfjalksdjfl kljadsflkjad', list);
      return shows = list;
    });
  }

}