module.exports = function (ngModule) {
  ngModule
    .directive('alertBug',alertBug);

    function alertBug() {
      var directive = {
        restrict: 'E',
        scope:{
          error: "@"
        },
        template: require('./bug.html'),
        controller: 'BugsCtrl',
        controllerAs: "vm"
      };
      return directive;
    }
};
