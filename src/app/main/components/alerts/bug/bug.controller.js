module.exports = function (ngModule) {
  ngModule
    .controller('BugsCtrl',BugsCtrl);

    function BugsCtrl() {
      console.log('BugsCtrl');
    }
};
