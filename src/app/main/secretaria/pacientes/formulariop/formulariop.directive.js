module.exports = function (ngModule){
  ngModule.directive ('secrePacienteFormulario',secrePacienteFormulario)

  /*@ngInject*/
  function secrePacienteFormulario (){
    return {
      restrict : 'E',
      scope: {
        open: '='
      },
      template: require('./pacientes.html'),
      bindToController : true,
      controller: 'SecrePacienteFormularioCtrl',
      controllerAs: 'vm'

    };
  }
}