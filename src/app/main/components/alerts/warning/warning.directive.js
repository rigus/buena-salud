module.exports = function (ngModule) {
  ngModule
    .directive('alertWarning',alertWarning);

    function alertWarning() {
      var directive = {
        restrict: 'E',
        scope:{
          functionToInvoke: "&",
          msjWarning: "@",
          isWarningOn: "="
        },
        bindToController : true,
        template: require('./warning.html'),
        controller: 'WarningCtrl',
        controllerAs : 'vm'
      };
      return directive;
    }
};
