module.exports = function (ngModule) {
  ngModule
    .directive('alertBug',alertBug);

    function alertBug() {
      var directive = {
        restrict: 'E',
        template: require('./bug.html'),
        controller: 'BugsCtrl'
      };
      return directive;
    }
};
