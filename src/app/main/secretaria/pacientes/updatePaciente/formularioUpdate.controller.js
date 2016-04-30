module.exports = function (ngModule){
  ngModule.controller('SecrePacienteFormularioUpdateCtrl', SecrePacienteFormularioUpdateCtrl)
  /*@ngInject*/
  function SecrePacienteFormularioUpdateCtrl (PacienteService, $state, $scope, $compile){
    var body = angular.element(document).find('body');
    var vm = this;
    vm.pacientes=[];

  vm.updatePaciente = function(){
       console.log(vm.paciente);
       PacienteService.putPaciente(vm.paciente)
        .then(function(response){
          if (response.estatus == "ok") {
            console.log('update');
            $state.reload();
            body.append($compile("<alert-succes correcto='"+ response.msj +"'></alert-succes>")($scope));
          }else {
            console.log(response.msj);
          }
        }).catch(function(err){
          console.log(err);
        });
    };


  }

}
