module.exports = function (ngModule){
  ngModule.directive ('secretariaFormularioDoctor',secretariaFormularioDoctor)

  /*@ngInject*/
  function secretariaFormularioDoctor (){
    return {
      restrict : 'E',
      scope: {
        open: '='
      },
      template: require('./doctores.html'),
      bindToController : true,
      controller: 'SecreDoctorFormularioCtrl',
      controllerAs: 'vm'

    };
  }
}