module.exports = function (ngModule) {
  ngModule
    .controller('WarningCtrl',WarningCtrl);

    /* @ngInject  */
    function WarningCtrl(DoctorService, $scope, $compile, $state){
      var vm = this;

    }
};
