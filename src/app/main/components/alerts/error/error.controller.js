module.exports = function (ngModule) {
  ngModule
    .controller('ErrorCtrl',ErrorCtrl);
    /*@ngInject*/
    function ErrorCtrl($scope) {
      var vm = this;
      var self = vm;
    }
};
