export function theMovieDB($http, $q, $log, $timeout) {
  'ngInject'

  let _path;
  let _setParams;

  const path = 'https://api.themoviedb.org/3';

  const endpoints = {
    series: '/discover/tv', // => Discover TV shows by different types of data
    show: '/tv/id', // => Get the primary information about a TV (valid id's = tmdb or imdb)
    config: '/configuration' // => Get the system wide configuration information.
  }

  const service = {
    setParams: setParams,
    getSeries: getSeries,
    getShow: getShow,
    getConfig: getConfig
  }

  return service;

  function getSeries(delay) {
    return makeRequest(delay, endpoints.series);
  }

  function getShow(delay) {
    return makeRequest(delay, endpoints.show);
  }

  function getConfig(delay) {
    return makeRequest(delay, endpoints.config);
  }

  function setParams(obj) {
    return _setParams = obj;
  }

  function makeUrl(type) {
    return _path = path + type;
  }

  function makeRequest(delay, type) {
    makeUrl(type);
    let defered = $q.defer();

    $http({
      url: _path,
      method: 'GET',
      params: _setParams
    }).success(res => {
      $log.debug('asdf', res);
      // delay the respond for demo display
      $timeout(() => {
        defered.resolve(res.results);
      }, delay);
    }).error(() => {
      defered.reject('fail')
    });

    return defered.promise;
  }

}