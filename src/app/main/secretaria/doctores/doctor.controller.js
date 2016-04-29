module.exports = function (ngModule){
  ngModule.controller('DoctorCtrl', DoctorCtrl)
  /*@ngInject*/
  function DoctorCtrl (arrDoctores){
    var vm = this;
    vm.doctores = arrDoctores;
  }

}