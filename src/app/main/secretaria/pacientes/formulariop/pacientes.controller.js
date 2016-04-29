module.exports = function (ngModule){
  ngModule.controller('SecrePacienteFormularioCtrl',SecrePacienteFormularioCtrl)
  /*@ngInject*/
  function SecrePacienteFormularioCtrl (PacienteService, $state, $scope, $compile){
    var body = angular.element(document).find('body');
    var vm = this;
    vm.pacientes = [];
    vm.addPaciente = function(){
     console.log("agregando paciente");
     PacienteService.postPacientes(vm.paciente)
      .then(function(response){
         console.log(vm.paciente);
         console.log(response);
         vm.pacientes.push(response);
         if(response.estatus == 'ok'){
           console.log('paciente agregado');
           vm.open = false;
           $state.reload();
           console.log(response.msj);
           body.append($compile("<alert-succes correcto='"+ response.msj +"'></alert-succes>")($scope));
         } else {
           console.log(response.msj);
         }
       }).catch(function(err){
         console.log(err);
         console.log('error');
       });
   };
  }

}
