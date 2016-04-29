module.exports = function (ngModule) {
  ngModule
    .controller('SuccessCtrl',SuccessCtrl);
    /*@ngInject*/
    function SuccessCtrl($scope) {
      var vm = this;
      var self = vm;
      setTimeout(function(){
        self.isAlertOn=false;
        $scope.$apply()
      },8000)
    }
};
