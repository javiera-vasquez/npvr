export class MainTestController {

  constructor ($timeout, webDevTec, toastr, rightNow) {
    'ngInject';

    this.rightNow = rightNow();
    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1457646015742;
    this.toastr = toastr;

    this.activate($timeout, webDevTec);
  }


  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);

    $timeout(() => {
      this.classAnimation = 'asdf';
    }, 1000);

  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
