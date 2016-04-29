module.exports = function (ngModule){
  ngModule.directive ('secretariaFormularioUpdateDoctor',secretariaFormularioUpdateDoctor)

  /*@ngInject*/
  function secretariaFormularioUpdateDoctor (){
    return {
      restrict : 'E',
      scope: {
        abierto: "=",
        doctor: '='
      },
      template: require('./formularioUpdate.html'),
      bindToController : true,
      controller: 'SecreDoctorFormularioUpdateCtrl',
      controllerAs: 'vm'

    };
  }
}
