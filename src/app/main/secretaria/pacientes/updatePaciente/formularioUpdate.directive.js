module.exports = function (ngModule){
  ngModule.directive ('secretariaFormularioUpdatePaciente',secretariaFormularioUpdatePaciente)

  /*@ngInject*/
  function secretariaFormularioUpdatePaciente (){
    return {
      restrict : 'E',
      scope: {
        abiertoform: "=",
        paciente: '='
      },
      template: require('./formularioUpdate.html'),
      bindToController : true,
      controller: 'SecrePacienteFormularioUpdateCtrl',
      controllerAs: 'vm'

    };
  }
}
