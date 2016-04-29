module.exports = function (ngModule) {
  ngModule
    .controller('SuccessCtrl',SuccessCtrl);
    /*@ngInject*/
    function SuccessCtrl($scope) {
      var vm = this;
      var self = vm;
    }
};
