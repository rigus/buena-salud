module.exports = function (ngModule){
  ngModule.controller('DoctorCtrl', DoctorCtrl)
  /*@ngInject*/
  function DoctorCtrl (arrDoctores, DoctorService){
    console.log("doctorees");
    var vm = this;
    vm.doctores = arrDoctores;

    vm.borrarDoctor = function(doctorSelected){
      console.log('Borrando al doctor',doctorSelected)
       DoctorService.deleteDoctor(doctorSelected)
          .then(function(response){
            console.log(response);
            if (response.estatus == "ok") {
                console.log('doctor eliminado');
                //vm.isWarningOn = false;
                $state.reload();
                //body.append($compile("<alert-succes alertSucc='"+ vm.alertSucc  +"' vm.alertSucc='"+ true  +"'  ng-if='"+ vm.alertSucc  +"'  correcto='"+ response.msj +"'></alert-succes>")($scope));
            }else {
              console.log(response.msj);
            }
          }).catch(function(err){
            console.log(err);
          });
    }

  }

}
