export function recordingService($log, $q, $http) {
  'ngInject'

  var service = {
    getRecords: getRecords,
    setRecord: setRecord,
    evaluateRecord: evaluateRecord
  }

  return service

  function getRecords() {
    let defered = $q.defer();

    $http.get('./assets/recordinglist.json').then((data) => {
      defered.resolve(data);
    }, (error) => {
      defered.reject(error);
    });

    return defered.promise;
  }

  function setRecord(list, show) {
    return list.push(show);
  }

  function evaluateRecord(user, cost) {

  }

}