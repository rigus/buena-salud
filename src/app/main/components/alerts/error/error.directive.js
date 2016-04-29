module.exports = function (ngModule) {
  ngModule
    .directive('alertError',alertError);

    function alertError() {
      var directive = {
        restrict: 'E',
        scope:{
          alertSucc: "=",
          error: "@"
        },
        bindToController : true,
        template: require('./error.html'),
        controller: 'ErrorCtrl',
        controllerAs : 'vm'
      };
      return directive;
    }
};
