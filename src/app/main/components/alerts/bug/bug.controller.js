module.exports = function (ngModule) {
  ngModule
    .controller('BugsCtrl',BugsCtrl);

    function BugsCtrl($scope) {
      console.log('BugsCtrl');
    }
};
