module.exports = function (ngModule) {
  ngModule
    .directive('alertSucces',alertSucces);

    function alertSucces() {
      var directive = {
        restrict: 'E',
        scope:{
          isAlertOn: "=",
          msjAlert: "@"
        },
        bindToController : true,
        template: require('./success.html'),
        controller: 'SuccessCtrl',
        controllerAs : 'vm'
      };
      return directive;
    }
};
