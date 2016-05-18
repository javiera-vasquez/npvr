export function config ($logProvider, $compileProvider, toastrConfig) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // speed up
  //$compileProvider.debugInfoEnabled(false);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;
}
