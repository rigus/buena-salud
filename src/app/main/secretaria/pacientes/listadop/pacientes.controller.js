module.exports = function (ngModule){
  ngModule.controller('PacienteCtrl', PacienteCtrl);
  /*@ngInject*/
  function PacienteCtrl (arrPacientes, PacienteService, $state, $scope, $compile){
    var body = angular.element(document).find('body');
    var vm = this;
    vm.pacientes = arrPacientes;

    /*vm.borrarDoctor = function(doctorSelected){
      console.log('Borrando al doctor',doctorSelected)
       DoctorService.deleteDoctor(doctorSelected)
          .then(function(response){
            console.log(response);
            if (response.estatus == "ok") {
                console.log('doctor eliminado');
                //vm.isWarningOn = false;
                $state.reload();
                body.append($compile("<alert-succes correcto='"+ response.msj +"'></alert-succes>")($scope));
              console.log(response.msj);
            }else{
              $state.reload();
              body.append($compile("<alert-error error='"+ response.msj +"'></alert-error>")($scope));

            }
          }).catch(function(err){
            console.log(err);
          });
    }*/

  }

};
