module.exports = function (ngModule){
  ngModule.directive ('secretariaFormularioDoctor',secretariaFormularioDoctor)

  /*@ngInject*/
  function secretariaFormularioDoctor (){
    return {
      restrict : 'E',
      scope: {
        open: "=",
        doctor: '='
      },
      template: require('./formularioUpdate.html'),
      bindToController : true,
      controller: 'SecreDoctorFormularioUpdateCtrl',
      controllerAs: 'vm'

    };
  }
}