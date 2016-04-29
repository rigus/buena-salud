module.exports = function (ngModule){
  ngModule.controller('DoctorCtrl', DoctorCtrl)
  /*@ngInject*/
  function DoctorCtrl (arrDoctores){
    console.log("doctorees");
    var vm = this;
    vm.doctores = arrDoctores;
  }

}
